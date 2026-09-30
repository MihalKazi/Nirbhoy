'use client';

import { useCallback, useEffect, useState } from 'react';

export function useLocal<T extends object>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setValue({ ...initial, ...JSON.parse(raw) });
    } catch {}
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const v = typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(v));
        } catch {}
        return v;
      });
    },
    [key],
  );

  const clear = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {}
    setValue(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { value, update, clear, ready };
}

export const CASE_KEY = 'dkc.case';
export const EVIDENCE_KEY = 'dkc.evidence';
export const STEP_IDS = ['url', 'shot', 'record', 'archive', 'backup'] as const;

export type Case = {
  when: string;
  platform: string;
  harms: string[];
  story: string;
  instigator: string;
  attackers: string;
  hasShots: boolean;
  hasRecording: boolean;
  hasArchive: boolean;
  name: string;
  station: string;
};

export const EMPTY_CASE: Case = {
  when: '',
  platform: '',
  harms: [],
  story: '',
  instigator: '',
  attackers: '',
  hasShots: false,
  hasRecording: false,
  hasArchive: false,
  name: '',
  station: '',
};

export const HARMS = [
  { id: 'threat', bn: 'হত্যা, ধর্ষণ বা শারীরিক ক্ষতির হুমকি', en: 'Threat of murder, rape or physical harm' },
  { id: 'doxxing', bn: 'ডক্সিং (ব্যক্তিগত নম্বর বা ঠিকানা ফাঁস)', en: 'Doxxing (phone number or address leaked)' },
  { id: 'deepfake', bn: 'ছবি বা ভিডিও বিকৃতি (ডিপফেক, এডিট)', en: 'Photo or video manipulation (deepfake, edits)' },
  { id: 'blackmail', bn: 'ব্ল্যাকমেইল বা ব্যক্তিগত ছবি ফাঁসের ভয়', en: 'Blackmail or threat to leak private images' },
  { id: 'harass', bn: 'অবিরাম হয়রানি, অপমান বা গালাগাল', en: 'Constant harassment, insults or abuse' },
  { id: 'fake', bn: 'ভুয়া প্রোফাইল বা আমার নামে অ্যাকাউন্ট', en: 'Fake profile or account in my name' },
  { id: 'offline', bn: 'অফলাইনে আমার শারীরিক নিরাপত্তার ঝুঁকি তৈরি হয়েছে', en: 'It has put my physical safety at risk offline' },
] as const;
