import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(237, 238, 240, 1);
  font-family: 'Roboto Slab', serif;
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 90%;
  width: 100%;
  max-width: 450px;
  background: #fff;
  align-items: center;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  border-radius: 9px;
`;

export const Card = styled.div`
  margin-top: 16px;
  height: 100%;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  border-radius: 9px;
  width: 90%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }

  ::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 6px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Send = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 16px;
  height: 62px;
  width: 100%;
  box-shadow: 0 0 2px rgba(194, 195, 197);
  background-color: #fafbfc;
`;

export const MyMessage = styled.li`
  padding: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  width: 150px;
  background: rgba(194, 195, 197);
  color: #000;
  border-radius: 15px;
  margin-top: 4px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessage = styled.li`
  margin-top: 4px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 150px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessageText = styled.div`
  max-width: 150px;
  background: #f1f1f1;
  border-radius: 9px;
  align-items: flex-start;
  display: flex;
  padding: 8px;
  word-break: break-all;
  text-align: left;
`;

export const OtherMessageSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
