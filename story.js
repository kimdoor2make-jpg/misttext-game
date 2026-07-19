// 스토리 단일 소스 — editor.html에서 편집·내보내기
window.STORY_DATA = {
 "nodes": [
  {
   "id": "cc_parent",
   "ending": false,
   "text": "운명은 태어난 화롯가에서 첫 장작을 얻는다.\n 어느 왕국의 변두리, 안개가 아직 먼 이야기이던 시절 — 당신은 태어났다.\n 당신의 부모는 어떤 사람이었는가?",
   "choices": [
    {
     "t": "국경 마을의 대장장이",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "str": 3,
      "maxhp": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "궁정 마법사의 탑지기",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "mag": 3,
      "maxmp": 4
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "수도원의 필사 학자",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "int": 3,
      "maxmp": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "숲가의 사냥꾼",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "agi": 3,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "떠도는 유랑 악단",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "tal": 2,
      "luck": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "몰락한 귀족 가문",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "gold": 8,
      "tal": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "cc_parent.png",
   "imgprompt": "humble medieval cottage interior at night, family gathered around a hearth fire, warm ember glow, parent silhouettes, a cradle in the corner"
  },
  {
   "id": "cc_youth",
   "ending": false,
   "text": "화롯불이 낮아질 무렵, 어린 시절은 끝났다.\n 열다섯의 당신은 하루의 대부분을 무엇에 쏟았는가?",
   "choices": [
    {
     "t": "울타리 밖에서의 검술 수련",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "str": 2,
      "maxhp": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "낡은 주문서를 몰래 베껴 쓰기",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "mag": 2,
      "maxmp": 3
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "도서관의 고서 탐독",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "int": 2,
      "maxmp": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "뒷골목 심부름과 지붕 타기",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "agi": 2,
      "gold": 3
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "정처 없는 떠돌이 생활",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "luck": 3
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "축제 무대에서 노래하기",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "tal": 2,
      "luck": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "cc_youth.png",
   "imgprompt": "medieval village at dusk, a teenager practicing alone outside a wooden fence, wooden sword stuck in ground, scattered books and tools"
  },
  {
   "id": "cc_adult",
   "ending": false,
   "text": "손에 굳은살이 앉고, 어깨가 단단해졌다.\n 어른이 된 당신은 무엇으로 빵을 벌었는가?",
   "choices": [
    {
     "t": "국경 수비대의 용병",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "str": 2,
      "maxhp": 3,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "탑의 견습 마법사",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "mag": 3,
      "maxmp": 4
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "영주청의 필경사",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "int": 2,
      "gold": 3
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "숲을 누비는 밀렵꾼",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "agi": 2,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "주사위 도박꾼",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "luck": 3,
      "gold": 4
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "선술집의 음유시인",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "tal": 3,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "cc_adult.png",
   "imgprompt": "busy medieval town street, tradespeople at work, mercenary post, scribe desk and tavern signboard along the road"
  },
  {
   "id": "cc_reason",
   "ending": false,
   "text": "그리고 어느 밤, 당신은 등불을 끄고 조용히 집 문을 닫았다.\n 무엇이 당신을 길 위로 이끌었는가?\n — 이 선택부터, 운명은 온전히 당신의 것이다.",
   "choices": [
    {
     "t": "가족을 해친 자에 대한 복수",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "str": 1,
      "maxhp": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "revenge",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "금지된 마법서가 부르는 소리",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "mag": 1,
      "maxmp": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "grimoire",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "세상의 진실을 향한 갈증",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "int": 1,
      "maxmp": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "truth",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "내 이름 위에 붙은 수배령",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "agi": 1,
      "luck": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "wanted",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "떠돌이 점성술사의 예언",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "luck": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "prophecy",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "더 큰 무대를 향한 꿈",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "tal": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "stage",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "cc_reason.png",
   "imgprompt": "lone traveler quietly closing a wooden door at night, empty moonlit road ahead, small bundle on shoulder, one last look back"
  },
  {
   "id": "forgotten",
   "text": "시야가 좁아지고, 소리가 멀어졌다.\n 누군가 당신의 이름을 부르는 것 같았지만, 그것이 당신의 이름이었는지는 이제 알 수 없다.\n ……며칠 뒤, 보급 기지 게시판의 전사자 명단에 한 줄이 추가되었다. 사람들은 그 앞을 바쁘게 지나쳐 갔다.",
   "ending": true,
   "choices": [
    {
     "t": "다른 삶으로 다시 시작한다",
     "check": "",
     "s": "cc_parent",
     "f": "cc_parent",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "forgotten.png",
   "imgprompt": "rain-soaked wooden notice board at a war camp, long casualty list on parchment, soldiers walking past without looking"
  },
  {
   "id": "w1_road",
   "text": "브란과 카렐, 두 왕국의 전쟁은 스물여섯 해째다. 국경의 회색 들판은 언제부턴가 \"잿날\"이라 불린다.\n 일자리든, 도망이든, 소문이든 — 길은 결국 모두를 국경으로 데려간다. 당신도 그랬다.\n 국경으로 향하는 길목에서 당신은 피난 행렬과 마주쳤다. 진창에 빠진 수레 하나, 수레 밑에서 우는 아이 하나, 그리고 그걸 그냥 지나치는 수백 개의 지친 발.",
   "ending": false,
   "choices": [
    {
     "t": "진창에 어깨를 넣고 수레를 밀어 올린다",
     "check": "str",
     "s": "w1_help",
     "f": "w1_help_fail",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1,
      "hp": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "갈 길이 멀다. 행렬을 앞질러 걷는다",
     "check": "",
     "s": "w1_camp",
     "f": "w1_camp",
     "sd": {
      "distset": -1,
      "dist": -6
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "병사들의 검문을 피해 행렬 한가운데로 숨어든다",
     "check": "",
     "s": "w1_hide",
     "f": "w1_hide",
     "sd": {
      "distset": -1,
      "luck": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "wanted",
     "setflag": "hid_in_crowd",
     "reqflag": ""
    }
   ],
   "img": "w1_road.png",
   "imgprompt": "grey ashen plains under overcast sky, long refugee column on a muddy road, ox cart stuck in mud, distant smoke on horizon"
  },
  {
   "id": "w1_help",
   "text": "수레가 진창에서 뽑혀 나오자 늙은 여인이 당신의 소매를 붙잡았다.\n \"이름이 뭔가, 젊은이. 은인의 이름은 알고 있어야지.\"\n 행렬의 지친 눈들이 일제히 당신을 향했다.",
   "ending": false,
   "choices": [
    {
     "t": "내 이름을 말해준다",
     "check": "",
     "s": "w1_camp",
     "f": "w1_camp",
     "sd": {
      "distset": -1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "told_name",
     "reqflag": ""
    },
    {
     "t": "\"지나가던 사람입니다.\" — 이름 없이 떠난다",
     "check": "",
     "s": "w1_camp",
     "f": "w1_camp",
     "sd": {
      "distset": -1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "stayed_nameless",
     "reqflag": ""
    }
   ],
   "img": "w1_help.png",
   "imgprompt": "traveler pushing a mud-stuck cart free on a refugee road, grateful old woman reaching out, tired refugees watching"
  },
  {
   "id": "w1_help_fail",
   "text": "수레는 꿈쩍도 하지 않았고, 당신은 진창에 무릎까지 빠졌다.\n 행렬 뒤편에서 병사 둘이 다가와 말없이 수레를 함께 밀었다. 수레는 그제야 움직였다.\n \"혼자 다 하려는 놈이 제일 먼저 죽지.\" 병사가 웃으며 당신의 어깨를 쳤다.",
   "ending": false,
   "choices": [
    {
     "t": "진흙을 털고 함께 걷는다",
     "check": "",
     "s": "w1_camp",
     "f": "w1_camp",
     "sd": {
      "distset": -1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_help_fail.png",
   "imgprompt": "two soldiers helping a mud-covered traveler push a cart on a rainy road, wry tired smiles"
  },
  {
   "id": "w1_hide",
   "text": "당신은 고개를 숙이고 행렬 한가운데로 스며들었다. 검문소의 병사가 명부를 넘기는 소리가 지척에서 들렸다.\n 그때, 옆에서 걷던 노인이 아무 말 없이 제 담요를 당신의 어깨에 둘러 주었다.\n 노인은 앞만 보며 낮게 말했다. \"잿날까지 가면 아무도 얼굴 따위 안 봐. 거기선 다들 새 이름으로 살거든.\"",
   "ending": false,
   "choices": [
    {
     "t": "담요 속에서 고개를 끄덕인다",
     "check": "",
     "s": "w1_camp",
     "f": "w1_camp",
     "sd": {
      "distset": -1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_hide.png",
   "imgprompt": "refugee column passing a military checkpoint, hooded figure hidden in the crowd, old man draping a blanket over their shoulders"
  },
  {
   "id": "w1_camp",
   "text": "해 질 무렵, 국경 보급 기지에 닿았다. 천막과 목책, 화톳불, 그리고 벽보 가득한 게시판.\n 징집관이 새로 온 이들을 향해 외치고 있었다. \"브란의 아들딸들! 서명 한 번이면 밥과 침상과 은화가 나온다! 영웅이 될 기회는 덤이고!\"\n 게시판에는 전사자 명단과 수배 전단, 그리고 부대 배속 명부가 나란히 붙어 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "지원서에 서명한다",
     "check": "",
     "s": "w1_role",
     "f": "w1_role",
     "sd": {
      "distset": -1,
      "gold": 3
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "서명 대신 짐꾼 일을 구한다 — 전쟁의 가장자리에 남는다",
     "check": "",
     "s": "w1_porter",
     "f": "w1_porter",
     "sd": {
      "distset": -1,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "no_sign",
     "reqflag": ""
    },
    {
     "t": "명부에서 그자의 부대를 찾는다",
     "check": "",
     "s": "w1_revenge",
     "f": "w1_revenge",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "revenge",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_camp.png",
   "imgprompt": "frontier supply camp at sunset, palisade and tents, bonfires, recruitment officer shouting atop a crate, crowded notice board"
  },
  {
   "id": "w1_revenge",
   "text": "손가락이 명부를 훑어 내려가다 멈췄다.\n 그 이름. 가족을 해치고도 처벌 대신 훈장을 받은 그 이름이, 동부 전선 지휘관 명단에 있었다.\n 심장이 느리고 무겁게 뛰었다. 전쟁은 갑자기 당신의 전쟁이 되었다.",
   "ending": false,
   "choices": [
    {
     "t": "떨리는 손으로 지원서에 서명한다",
     "check": "",
     "s": "w1_role",
     "f": "w1_role",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "revenge_lead",
     "reqflag": ""
    }
   ],
   "img": "w1_revenge.png",
   "imgprompt": "a hand tracing names on a military roster nailed to a board, torchlight, knuckles white with tension"
  },
  {
   "id": "w1_porter",
   "text": "\"서명은 됐고, 등짐이나 지겠습니다.\"\n 보급관은 어깨를 으쓱하고 당신에게 짐표를 던졌다. 화살 다발, 붕대 상자, 곡괭이.\n 밤새 목책 안팎을 오가며 당신은 기지의 구조를, 병사들의 얼굴을, 그리고 그들이 밤에만 하는 이야기를 알게 되었다.",
   "ending": false,
   "choices": [
    {
     "t": "막사 뒤에서 쪽잠을 청한다",
     "check": "",
     "s": "w1_night",
     "f": "w1_night",
     "sd": {
      "distset": -1,
      "int": 1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_porter.png",
   "imgprompt": "night supply camp, a porter carrying arrow bundles between tents, soldiers whispering by low fires"
  },
  {
   "id": "w1_role",
   "text": "서명이 끝나자 상사 하나가 당신을 위아래로 훑었다.\n \"손 보자. …그래, 넌 어디 쓸까.\"\n 배속을 정할 시간이다.",
   "ending": false,
   "choices": [
    {
     "t": "창검병 — 방패벽의 맨 앞줄",
     "check": "",
     "s": "w1_night",
     "f": "w1_night",
     "sd": {
      "distset": -1,
      "str": 1,
      "maxhp": 2,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "role_blade",
     "reqflag": ""
    },
    {
     "t": "전장 술사 보조 — 부적과 결계 나르기",
     "check": "",
     "s": "w1_night",
     "f": "w1_night",
     "sd": {
      "distset": -1,
      "mag": 1,
      "maxmp": 3,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "role_ward",
     "reqflag": ""
    },
    {
     "t": "정찰조 — 잿날의 안개 속을 걷는 눈",
     "check": "",
     "s": "w1_night",
     "f": "w1_night",
     "sd": {
      "distset": -1,
      "agi": 1,
      "luck": 1,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "role_scout",
     "reqflag": ""
    },
    {
     "t": "종군 서기 — 명령서와 전사자 명단을 쓰는 손",
     "check": "",
     "s": "w1_night",
     "f": "w1_night",
     "sd": {
      "distset": -1,
      "int": 2,
      "dist": -5
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "role_scribe",
     "reqflag": ""
    }
   ],
   "img": "w1_role.png",
   "imgprompt": "army quartermaster inspecting recruits in a row: spearman with shield, rune stones on a cart, scout cloak, scribe with ledger"
  },
  {
   "id": "w1_night",
   "text": "화톳불 곁, 고참 병사 하나가 술잔 대신 물주전자를 돌리며 물었다.\n \"새 얼굴이군. 왜 왔나, 여기까지.\"\n 불빛에 비친 얼굴들이 당신의 대답을 기다렸다.",
   "ending": false,
   "choices": [
    {
     "t": "집을 나온 진짜 이유를 짧게, 사실대로 말한다",
     "check": "",
     "s": "w1_alarm",
     "f": "w1_alarm",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "answered_true",
     "reqflag": ""
    },
    {
     "t": "\"영웅이 되러 왔지.\" — 사람들이 좋아할 대답을 한다",
     "check": "",
     "s": "w1_alarm",
     "f": "w1_alarm",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "answered_hero",
     "reqflag": ""
    },
    {
     "t": "대답 대신 불씨만 바라본다",
     "check": "",
     "s": "w1_alarm",
     "f": "w1_alarm",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "answered_silence",
     "reqflag": ""
    }
   ],
   "img": "w1_night.png",
   "imgprompt": "soldiers around a campfire at night passing a water kettle, one newcomer being asked a question, firelit weathered faces"
  },
  {
   "id": "w1_alarm",
   "text": "대답이 채 식기도 전에, 서쪽 망루에서 종이 미친 듯이 울렸다.\n \"야습이다!! 카렐군이다!!\"\n 화톳불이 걷어차여 꺼지고, 어둠 속에서 화살이 비처럼 쏟아지기 시작했다. 목책 한쪽이 불타며 무너지는 소리.",
   "ending": false,
   "choices": [
    {
     "t": "무기를 잡고 무너진 목책을 막아선다",
     "check": "str",
     "s": "w1_stand",
     "f": "w1_hurt",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1,
      "hp": -4
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "연기와 어둠을 틈타 적의 측면으로 돌아간다",
     "check": "agi",
     "s": "w1_flank",
     "f": "w1_hurt",
     "sd": {
      "distset": -1,
      "agi": 1
     },
     "fd": {
      "distset": -1,
      "hp": -4
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    },
    {
     "t": "무너지는 결계석에 손을 얹고 마력을 쏟아붓는다 (마력 3)",
     "check": "mag",
     "s": "w1_wardhold",
     "f": "w1_hurt",
     "sd": {
      "distset": -1,
      "mag": 1
     },
     "fd": {
      "distset": -1,
      "hp": -3
     },
     "cost": 0,
     "mcost": 3,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_alarm.png",
   "imgprompt": "night raid on a palisade camp, arrows raining from darkness, burning watchtower, soldiers scrambling with torches"
  },
  {
   "id": "w1_stand",
   "text": "당신은 무너진 목책의 틈, 가장 좁은 곳에 버티고 섰다.\n 어둠 속에서 밀려오는 그림자들을 하나, 둘 — 셀 수 없게 될 때까지 밀어냈다.\n 등 뒤에서 피난민들의 비명이 잦아들고, 병사들이 전열을 재정비할 시간을 벌었다.",
   "ending": false,
   "choices": [
    {
     "t": "숨을 고르며 틈을 지킨다",
     "check": "",
     "s": "w1_choice",
     "f": "w1_choice",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_stand.png",
   "imgprompt": "lone fighter holding the breach of a broken palisade against shadowy attackers, night battle, drifting embers"
  },
  {
   "id": "w1_flank",
   "text": "당신은 불타는 천막의 연기를 방패 삼아 목책 밖으로 미끄러져 나갔다.\n 적의 등 뒤, 화살을 재던 궁수들의 줄이 보였다. 당신이 어둠 속에서 덮치자 줄이 무너졌고, 쏟아지던 화살비가 뚝 그쳤다.",
   "ending": false,
   "choices": [
    {
     "t": "어둠 속에서 다음 표적을 찾는다",
     "check": "",
     "s": "w1_choice",
     "f": "w1_choice",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_flank.png",
   "imgprompt": "cloaked figure slipping through smoke behind an enemy archer line at night, moment before a surprise strike"
  },
  {
   "id": "w1_wardhold",
   "text": "금이 가던 결계석이 당신의 마력을 삼키고 다시 빛을 냈다.\n 푸른 막이 화살을 튕겨내는 소리가 우박 소리 같았다. 결계 아래로 피난민들이 기어들어 왔다.\n 술사장이 당신을 돌아보았다. \"너, 이름이 뭐야. 아니 — 나중에. 버텨!\"",
   "ending": false,
   "choices": [
    {
     "t": "이를 악물고 결계를 유지한다",
     "check": "",
     "s": "w1_choice",
     "f": "w1_choice",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_wardhold.png",
   "imgprompt": "mage hands pressed on a cracked glowing ward stone, blue translucent barrier deflecting arrows over cowering refugees"
  },
  {
   "id": "w1_hurt",
   "text": "어둠 속에서 무언가가 당신을 후려쳤고, 세상이 한 바퀴 돌았다.\n 진흙 속에서 정신을 차렸을 때, 전투는 아직 끝나지 않았다. 몸이 무겁다. 하지만 아직 움직인다.",
   "ending": false,
   "choices": [
    {
     "t": "피를 닦고 일어선다",
     "check": "",
     "s": "w1_choice",
     "f": "w1_choice",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_hurt.png",
   "imgprompt": "wounded soldier rising from the mud during a night battle, blurred fighting in the background, gritted teeth"
  },
  {
   "id": "w1_choice",
   "text": "혼전의 한가운데, 두 개의 비명이 동시에 들렸다.\n 하나 — 불타는 망루 아래 깔린 어린 병사. \"살려…주세요…\"\n 하나 — 언덕 위 지휘관의 고함. \"군기(軍旗)가 넘어간다!! 깃발을 지켜라!! 깃발이 우선이다!!\"\n 몸은 하나다.",
   "ending": false,
   "choices": [
    {
     "t": "망루로 달려가 병사를 꺼낸다",
     "check": "",
     "s": "w1_save",
     "f": "w1_save",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "saved_soldier",
     "reqflag": ""
    },
    {
     "t": "언덕으로 달려가 군기를 지킨다",
     "check": "",
     "s": "w1_banner",
     "f": "w1_banner",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "saved_banner",
     "reqflag": ""
    }
   ],
   "img": "w1_choice.png",
   "imgprompt": "night battlefield, burning collapsed watchtower with a trapped young soldier on one side, army banner falling on a hill on the other side"
  },
  {
   "id": "w1_save",
   "text": "불붙은 들보를 밀어내고, 당신은 어린 병사를 끌어냈다. 소년은 연기 속에서 당신의 옷자락을 놓지 않았다.\n \"이름이… 이름이 뭡니까. 나중에, 꼭 갚을게요.\"\n 등 뒤에서 군기가 넘어가는 소리와 지휘관의 욕설이 들렸다. 그리고 그 순간 — 쓰러진 깃대에 걸려 넘어진 카렐군 돌격대장의 목덜미가, 정확히 당신의 발 앞에 굴러 들어왔다.",
   "ending": false,
   "choices": [
    {
     "t": "놓치지 않고 제압한다",
     "check": "str",
     "s": "w1_feat",
     "f": "w1_feat_luck",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1,
      "luck": 1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_save.png",
   "imgprompt": "rescuer pulling a young soldier out from under burning timbers, sparks flying, tower collapsing behind"
  },
  {
   "id": "w1_banner",
   "text": "당신은 언덕을 뛰어올라 넘어가는 깃대를 붙잡았다. 잿날의 바람에 브란의 깃발이 다시 펼쳐졌다.\n 병사들이 그 깃발을 보고 함성을 지르며 결집했다. 교과서 같은 순간이었다. 지휘관이 만족스럽게 고개를 끄덕였다.\n 다만 — 불타는 망루 쪽의 비명이, 어느 순간부터 들리지 않았다.",
   "ending": false,
   "choices": [
    {
     "t": "결집한 병사들과 함께 역습을 이끈다",
     "check": "str",
     "s": "w1_feat",
     "f": "w1_feat_luck",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1,
      "luck": 1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_banner.png",
   "imgprompt": "warrior raising a fallen army banner upright on a hill at night, soldiers rallying below, wind and embers"
  },
  {
   "id": "w1_feat",
   "text": "그날 밤 카렐군의 야습은 실패로 끝났다. 그리고 혼전의 한복판에서 적 돌격대장을 쓰러뜨린 이가 있다는 이야기가, 해도 뜨기 전에 기지 전체에 퍼졌다.\n 당신이 한 일은 분명 그 절반쯤이었다. 나머지 절반은 어둠과 우연과 남들의 몫이었는데 —\n 이야기 속에서 그 절반들은 전부 당신의 것이 되어 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "젖은 장작 냄새 속에서 아침을 맞는다",
     "check": "",
     "s": "w1_after",
     "f": "w1_after",
     "sd": {
      "distset": -1,
      "dist": -10
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_feat.png",
   "imgprompt": "dawn after battle over a ruined camp, soldiers pointing in awe at one weary figure, defeated enemy champion on the ground"
  },
  {
   "id": "w1_feat_luck",
   "text": "솔직히 말하면, 발이 미끄러졌다. 넘어지며 휘두른 팔이 하필 적 돌격대장의 투구를 후려쳤고, 그가 정신을 잃고 쓰러진 자리가 하필 브란 병사들 한복판이었다.\n 전투가 끝났을 때, 사람들은 당신이 \"맨손으로 적장을 때려눕혔다\"고 말하고 있었다.\n 정정할 틈은 없었다. 다들 그 이야기를 너무 좋아했으니까.",
   "ending": false,
   "choices": [
    {
     "t": "얼떨떨한 채로 아침을 맞는다",
     "check": "",
     "s": "w1_after",
     "f": "w1_after",
     "sd": {
      "distset": -1,
      "dist": -10
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_feat_luck.png",
   "imgprompt": "chaotic lucky moment in battle, enemy champion knocked out cold by a stumbling recruit, nearby soldiers frozen in surprise"
  },
  {
   "id": "w1_after",
   "text": "아침, 잿빛 안개가 걷히기도 전에 사령부의 문장(紋章)을 단 마차가 기지에 들어왔다.\n 붉은 망토의 참모가 당신을 찾아와 정중히 고개를 숙였다. \"어젯밤의 영웅을 뵙습니다. 사령부에서 모시라는 명입니다.\"\n 등 뒤에서 병사들이 수군거렸다. 당신의 무용담은 하룻밤 새 세 배쯤 자라 있었다 — 당신이 하지 않은 말과, 하지 않은 일들로.",
   "ending": false,
   "choices": [
    {
     "t": "마차에 오른다 — 영웅이 되러",
     "check": "",
     "s": "w1_end",
     "f": "w1_end",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "ride_proud",
     "reqflag": ""
    },
    {
     "t": "마차에 오르며, 부풀려진 이야기를 한 번 정정해 본다",
     "check": "",
     "s": "w1_end",
     "f": "w1_end",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "ride_honest",
     "reqflag": ""
    }
   ],
   "img": "w1_after.png",
   "imgprompt": "morning mist, ornate command carriage entering a battered camp, red-cloaked officer bowing to a bewildered common soldier"
  },
  {
   "id": "w1_end",
   "text": "\"정정은 사령부에 가서 하셔도 됩니다.\" 참모는 부드럽게 웃었다. \"어차피 사람들은 믿고 싶은 이야기를 믿으니까요.\"\n 마차가 잿날의 들판을 벗어난다. 창밖으로, 어젯밤 당신이 지나온 자리들이 천천히 멀어졌다.\n 당신은 영웅이 되러 간다. 그것이 당신이 집을 나온 이유였던가 — 문득, 그 밤의 문소리가 떠올랐다.\n\n — 1장 끝. 2장 「만들어지는 영웅」 준비 중 —",
   "ending": true,
   "choices": [
    {
     "t": "다른 삶으로 다시 시작한다",
     "check": "",
     "s": "cc_parent",
     "f": "cc_parent",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": ""
    }
   ],
   "img": "w1_end.png",
   "imgprompt": "view through a carriage window of grey plains rolling past, faint reflection of a thoughtful soldier on the glass"
  }
 ]
};
