import "core-js/stable"
import "regenerator-runtime/runtime"
import { getCurrentSkin, timestamp } from './skin'
import snap from './snap'

 const currentSkin = getCurrentSkin();
      const stories = new Snap('stories', {
        backNative: true,
        previousTap: true,
        skin: currentSkin['name'],
        autoFullScreen: currentSkin['params']['autoFullScreen'],
        avatars: currentSkin['params']['avatars'],
        paginationArrows: currentSkin['params']['paginationArrows'],
        list: currentSkin['params']['list'],
        cubeEffect: currentSkin['params']['cubeEffect'],
        localStorage: true,
        stories: [
          Snap.buildTimelineItem(
            "Berkeley Data", 
            "../img/tile1.jpg",
            "",
            "",
            timestamp(),
            [
              ["berkeley-1", "video", 3, "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap1.mp4", "../img/tile1.jpg", '', false, false,],
              ["berkeley-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap2.mp4", "../img/tile1.jpg", '', false, false,],
              ["berkeley-3", "video", 3, "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap3.mp4", "../img/tile1.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "College Risks", 
            "../img/tile2.jpg",
            "",
            "",
            timestamp(),
            [
              ["college-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap1.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap2.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap3.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-4", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap4.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-5", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap5.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-6", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap6.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-7", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap7.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-8", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap8.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-9", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap9.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-10", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap10.mp4", "../img/tile2.jpg", '', false, false,],
              ["college-11", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap11.mp4", "../img/tile2.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Allbirds", 
            "../img/tile3.jpg",
            "",
            "",
            timestamp(),
            [
              ["allbirds-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap1.mp4", "../img/tile3.jpg", '', false, false,],
              ["allbirds-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap2.mp4", "../img/tile3.jpg", '', false, false,],
              ["allbirds-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap3.mp4", "../img/tile3.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Retire", 
            "../img/tile4.jpg",
            "",
            "",
            timestamp(),
            [
              ["retire-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap1.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap2.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap3.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-4", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap4.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-5", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap5.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-6", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap6.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-7", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap7.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-8", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap8.mp4", "../img/tile4.jpg", '', false, false,],
              ["retire-9", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap9.mp4", "../img/tile4.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Supreme", 
            "../img/tile5.jpg",
            "",
            "",
            timestamp(),
            [
              ["supreme-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap1.mp4", "../img/tile5.jpg", '', false, false,],
              ["supreme-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap2.mp4", "../img/tile5.jpg", '', false, false,],
              ["supreme-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap3.mp4", "../img/tile5.jpg", '', false, false,],
              ["supreme-4", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap4.mp4", "../img/tile5.jpg", '', false, false,],
              ["supreme-5", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap5.mp4", "../img/tile5.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Tesla", 
            "../img/tile6.jpg",
            "",
            "",
            timestamp(),
            [
              ["tesla-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap1.mp4", "../img/tile6.jpg", '', false, false,],
              ["tesla-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap2.mp4", "../img/tile6.jpg", '', false, false,],
              ["tesla-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap3.mp4", "../img/tile6.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "HQ", 
            "../img/tile7.jpg",
            "",
            "",
            timestamp(),
            [
              ["HQ-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap1.mp4", "../img/tile7.jpg", '', false, false,],
              ["HQ-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap2.mp4", "../img/tile7.jpg", '', false, false,],
              ["HQ-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap3.mp4", "../img/tile7.jpg", '', false, false,],
              ["HQ-4", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap4.mp4", "../img/tile7.jpg", '', false, false,],
              ["HQ-5", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap5.mp4", "../img/tile7.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Gen Z", 
            "../img/tile8.jpg",
            "",
            "",
            timestamp(),
            [
              ["genz-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap1.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap2.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap3.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-4", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap4.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-5", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap5.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-6", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap6.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-7", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap7.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-8", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap8.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-9", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap9.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-10", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap10.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-11", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap11.mp4", "../img/tile8.jpg", '', false, false,],
              ["genz-12", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap12.mp4", "../img/tile8.jpg", '', false, false,]
            ]
          ),
          Snap.buildTimelineItem(
            "Sharpies", 
            "../img/tile9.jpg",
            "",
            "",
            timestamp(),
            [
              ["sharpies-1", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap1.mp4", "../img/tile9.jpg", '', false, false,],
              ["sharpies-2", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap2.mp4", "../img/tile9.jpg", '', false, false,],
              ["sharpies-3", "video", 0, "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap3.mp4", "../img/tile9.jpg", '', false, false,]
            ]
          )
        ]
      })