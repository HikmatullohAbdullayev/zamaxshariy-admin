import React from 'react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
function Radio(props) {
  return (
    <>
      <RadioGroup defaultValue="Tugallangan" className="flex my-[10px]">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Tugallangan" id="r1" />
          <Label htmlFor="r1">Tugallangan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Tugallanmagan" id="r2" />
          <Label htmlFor="r2">Tugallanmagan</Label>
        </div>
      </RadioGroup>
    </>
  );
}

export default Radio;
