import React, { useState, useEffect } from 'react';

function LoopingAudio() {
    const [audio] = useState(
        new Audio('/B.B. King - The Thrill Is Gone ft. Tracy Chapman_xVxCtt3s_1M.mp3'),
    );
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleDocumentClick = () => {
            setIsPlaying(!isPlaying);
        };

        if (isPlaying) {
            audio.loop = true;
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isPlaying, audio]);

    return <div></div>;
}

export default LoopingAudio;
