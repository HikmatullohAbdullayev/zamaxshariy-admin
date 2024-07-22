import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Sellect(props) {
  return (
    <>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Darslik turini tanlang" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sarf">Sarf</SelectItem>
            <SelectItem value="nahv">Nahv</SelectItem>
            <SelectItem value="boshqa">Boshqa</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default Sellect;
