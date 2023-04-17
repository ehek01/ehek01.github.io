import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

import {setRoomId} from "../../redux/reducers/video/room";
import {Helmet} from "react-helmet";
import Content from "../../components/video/Content";
import {setMainUser} from "../../redux/reducers/video/mainUser";

const Conference = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { roomid } = router.query;

  useEffect(() => {
    dispatch(setRoomId(roomid));
    dispatch(setMainUser({ mainUserId: 'localUser', onlyNotExist: true }));

    // connect(params);

    // 자원정리
    // window.addEventListener("beforeunload", (e) => {
    //   if (this._conferenceManager) {
    //     this._conferenceManager.dispose();
    //   }
    // });
    //
    // // 전체모드 변경 감지
    // document.addEventListener("fullscreenchange", () => {
    //   if (document.fullscreenElement === null) {
    //     this.props.toggleVideoExitFullScreen();
    //     this.props.setCloseSidebar(false);
    //   }
    // });
  }, []);

  const connect = (params) => {
  }

  return (
    <div>
      <Helmet>
        <title>화상대화</title>
        <meta
          name="description"
          content={`amaranth meet video Join page`}
        />
      </Helmet>
      <Content />
    </div>
  );
};

export default Conference;
