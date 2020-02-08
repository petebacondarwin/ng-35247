import {OnixCodeList} from '@eiswind/proto-client-api';

export const mockCodeList: OnixCodeList = {
  listName: 'List1',
  codes: [
    {
      value: 'C01',
      text: 'Text1',
      description: 'Desc1'
    },
    {
      value: 'C02',
      text: 'Text2',
      description: 'Desc2'
    },
    {
      value: 'CGER',
      text: 'GERMAN',
      description: 'Desc3'
    }]
};

