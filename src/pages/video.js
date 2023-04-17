import React from 'react';
import { useRouter } from 'next/router';
import Conference from "./video/Conference";
import {Provider} from "react-redux";
import {store} from "../redux/store";

const Video = () => {
  const router = useRouter();
  const { roomid } = router.query;

  return (
    <Provider store={store}>
      {
        roomid ? <Conference /> :
        <p>화상대화방에 입장하여 화상대화를 시작하세요!</p>
      }
    </Provider>
  );
};

export default Video;
