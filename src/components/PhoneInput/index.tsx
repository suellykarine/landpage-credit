/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import IMask from "imask";

interface PhoneInputProps {
  onBlur: (value: string) => void;
  initialValue?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  onBlur,
  initialValue,
}: PhoneInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mask, setMask] = useState<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      const maskOptions = {
        mask: [
          {
            mask: "+55 (00) 0000-0000",
          },
          {
            mask: "+55 (00) 0000-00000",
          },
        ],
        dispatch: function (appended: any, dynamicMasked: any) {
          const value = (dynamicMasked.value + appended).replace(/\D/g, "");
          if (value.length >= 13) {
            return dynamicMasked.compiledMasks[1];
          }
          return dynamicMasked.compiledMasks[0];
        },
      };

      const newMask = IMask(inputRef.current, maskOptions);
      setMask(newMask);
    }

    return () => {
      if (mask) {
        mask.destroy();
      }
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlur && mask) {
      const value = mask.value;
      onBlur(value);
    }
  };

  return (
    <input
      style={{ width: 211 }}
      ref={inputRef}
      onBlur={handleChange}
      placeholder="+55 (00) 0000-00000"
      defaultValue={initialValue}
    />
  );
};

export default PhoneInput;
