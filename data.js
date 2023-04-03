var APP_DATA = {
  "scenes": [
    {
      "id": "0-lr",
      "name": "LR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.39016553923614694,
        "pitch": 0.5117790118616199,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.04877829104660414,
          "pitch": 0.09628263159236283,
          "rotation": 0,
          "target": "1-br"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-br",
      "name": "BR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.0099537406933763,
        "pitch": -0.07904255248411118,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -1.6316821572242617,
          "pitch": -0.022821804347865182,
          "rotation": 0,
          "target": "0-lr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ulysis",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
