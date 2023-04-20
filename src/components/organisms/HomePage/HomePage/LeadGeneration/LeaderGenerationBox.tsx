import React from 'react';
import { FormBox, GradientButton } from '../../../../atoms';
import OutlineButton from '../../../../atoms/Buttons/OutlineButton';
import { toast } from 'react-hot-toast';
import { LeadGenerationBoxProps } from './types.d';

const LeaderGenerationBox = (props: LeadGenerationBoxProps) => {
  const { setIsFormVisible, setIsCancelFormVisible } = props;

  const onReject = () => {
    setIsFormVisible(false);
    setIsCancelFormVisible(true);
    return toast.success('Ok! Thanks, this request has been recorder for better experience');
  };

  const onAccept = () => {
    setIsFormVisible(true);
    return toast.success('Thanks for accepting the offer. Please fill the details.');
  };

  return (
    <FormBox title="Let us Serve you" desc="Join now!">
      <div className="flex gap-3">
        <OutlineButton fullWidth text="Not a fit" onClick={() => onReject()} />
        <GradientButton fullWidth text="All good!" onClick={() => onAccept()} />
      </div>
    </FormBox>
  );
};

export default LeaderGenerationBox;
