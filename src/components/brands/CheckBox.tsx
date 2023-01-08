import { Checkbox, Collapse } from 'antd';
import React, { useState } from 'react';
import { data } from '../../data';
import { IPurchase } from '../../types';

const { Panel } = Collapse;

const CheckBox = (props: { handleFilters: (arg0: IPurchase[]) => void }) => {
  const [Checked, setChecked] = useState<IPurchase[]>([]);

  const handleToggle = (value: IPurchase) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  return (
    <>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="choose a brands:" key="1">
          {data.map((value) => (
            <React.Fragment key={value.id}>
              <Checkbox
                onChange={() => handleToggle(value)}
                type="checkbox"
                checked={Checked.indexOf(value) === -1 ? false : true}
              />
              <span>{value.brand}</span>
            </React.Fragment>
          ))}
        </Panel>
      </Collapse>
    </>
  );
};

export default CheckBox;
