import React from 'react';

import {svg} from '../svg';

type Props = {
  type?: string;
  inputType: string;
  placeholder: string;
  autoCapitalize?: string;
  containerStyle?: React.CSSProperties;
};

export const InputField: React.FC<Props> = ({
  inputType,
  placeholder,
  type = 'text',
  containerStyle,
}) => {
  return (
    <div
      style={{
        gap: 14,
        borderRadius: 10,
        padding: '8px 0px 8px 10px',
        border: '1px solid #FFEFE6',
        backgroundColor: 'var(--white-color)',
        ...containerStyle,
      }}
      className='row-c'
    >
      {inputType === 'email' && <svg.EmailSvg />}
      {inputType === 'username' && <svg.UserSvg />}
      {inputType === 'password' && <svg.PasswordSvg />}
      {inputType === 'code' && <svg.PasswordSvg />}
      {inputType === 'country' && <svg.MapPinSvg />}
      {inputType === 'amount' && <svg.DollarSvg />}
      {inputType === 'goal' && <svg.EditSvg />}
      {inputType === 'phone' && <svg.PhoneSvg />}
      {inputType === 'beneficiary-bank' && <svg.BriefcaseSvg />}
      {inputType === 'iban-number' && <svg.HashSvg />}
      {inputType === 'date' && <svg.CalendarSvg />}
      {inputType === 'location' && <svg.MapPinSvg />}
      <input
        placeholder={placeholder}
        maxLength={50}
        type={type}
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: 16,
          color: 'var(--main-color)',
        }}
      />
      <div
        className='clickable'
        style={{padding: '10px 19px'}}
      >
        {inputType === 'email' && <svg.CheckSvg />}
        {inputType === 'password' && <svg.EyeOffSvg />}
      </div>
    </div>
  );
};
