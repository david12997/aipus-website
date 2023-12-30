'use client'

import { Player } from "@lottiefiles/react-lottie-player";

export type LottiePlayerProps = {
    src: string;
}

const LottiePlayer = (props:LottiePlayerProps):JSX.Element => {

    return<>
        <Player
            src={props.src}
            loop
            style={{ width: '100%', height: '100%' }}
            autoplay
        />
    </>
}

export default LottiePlayer;