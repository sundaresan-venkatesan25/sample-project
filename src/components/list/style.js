import styled from '@emotion/styled';

export const UIList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    width: 200px;
    li {
      width: 100%;
      margin: 4px 0;
      border : 1px solid #1115;
      &:hower {
        background: #1115;
      }
    }
    }
  display: flex;
`;

export const ListHeader = styled.div`
  width: 200px;
  height: 20px;
  display: inline-block;
`;

export const Container = styled.div`
  padding: 0 8px;
  display: flex;
  }
`;

export const Child = styled.span`
  float: right;
`;

export const Trigger = styled.button`
  background: white;
  display: block;
  padding: 8px;
  margin: 0px auto;
  width: 100%;
  /* border-radius: 4px; */
  border : none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
