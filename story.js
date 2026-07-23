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
      "maxhp": 2,
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
     "reqflag": "",
     "additem": "아버지의 낡은 대장 망치",
     "lead": "대장간의 열기와 쇠 두드리는 소리가 당신의 자장가였다. 남들보다 이른 나이에 팔뚝에 근육이 앉았다."
    },
    {
     "t": "궁정 마법사의 탑지기",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "mag": 3,
      "maxmp": 4,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "마력 잔재가 밴 지팡이 조각",
     "lead": "탑 꼭대기의 밤은 별보다 마법 불빛이 더 밝았다. 당신은 옹알이보다 먼저 주문의 억양을 흉내 냈다."
    },
    {
     "t": "수도원의 필사 학자",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "int": 3,
      "maxmp": 2,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "여백까지 주석이 빼곡한 고서",
     "lead": "수도원의 양피지 냄새 속에서 자랐다. 당신에게 글자는 그림이자 유일한 친구였다."
    },
    {
     "t": "숲가의 사냥꾼",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "agi": 3,
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
     "reqflag": "",
     "additem": "잘 손질된 사냥칼",
     "lead": "숲의 소리를 읽는 법을 걷기보다 먼저 배웠다. 당신의 발은 마른 가지 하나 밟지 않았다."
    },
    {
     "t": "떠도는 유랑 악단",
     "check": "",
     "s": "cc_youth",
     "f": "cc_youth",
     "sd": {
      "distset": -1,
      "tal": 2,
      "luck": 2,
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
     "reqflag": "",
     "additem": "칠이 벗겨진 낡은 류트",
     "lead": "수레 위에서 잠들고 낯선 마을에서 눈을 떴다. 박수와 야유를 함께 들으며 자랐다."
    }
   ],
   "img": "cc_parent.png",
   "imgprompt": "humble medieval cottage interior at night, family gathered around a hearth fire, warm ember glow, parent silhouettes, a cradle in the corner"
  },
  {
   "id": "cc_youth",
   "ending": false,
   "text": "그렇게 유년이 지나갔다.\n 열다섯이 된 당신은, 하루의 대부분을 무엇에 쏟으며 보냈는가?",
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
     "reqflag": "",
     "additem": "이 빠진 연습용 검",
     "lead": "울타리 밖 공터에 흘린 땀만큼, 당신의 팔은 단단해지고 검은 손에 익었다."
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
     "reqflag": "",
     "additem": "반쯤 그을린 주문 필사본",
     "lead": "촛불 아래 몰래 베낀 문양들이 손끝에 새겨졌다. 마력이 당신의 말을 알아듣기 시작했다."
    },
    {
     "t": "도서관의 고서 탐독",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "int": 2,
      "maxmp": 1,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "여러 번 접힌 낡은 지도",
     "lead": "먼지 쌓인 책장 사이에서, 당신은 세상을 책으로 먼저 여행했다."
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
     "reqflag": "",
     "additem": "소매치기용 가는 단검",
     "lead": "골목의 그늘과 지붕의 경사가 당신의 놀이터였다. 아무도 당신이 지나간 것을 눈치채지 못했다."
    },
    {
     "t": "축제 무대에서 노래하기",
     "check": "",
     "s": "cc_adult",
     "f": "cc_adult",
     "sd": {
      "distset": -1,
      "tal": 2,
      "luck": 1,
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
     "reqflag": "",
     "additem": "관객이 던져 준 은화 주머니",
     "lead": "무대의 떨림과 관객의 눈빛에 중독됐다. 당신의 목소리는 사람을 붙드는 법을 익혔다."
    }
   ],
   "img": "cc_youth.png",
   "imgprompt": "medieval village at dusk, a teenager practicing alone outside a wooden fence, wooden sword stuck in ground, scattered books and tools"
  },
  {
   "id": "cc_adult",
   "ending": false,
   "text": "그 시절이 당신을 빚어 놓았다.\n 어른이 된 당신은, 무엇으로 하루의 빵을 벌었는가?",
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
     "reqflag": "",
     "additem": "수비대 지급 장창",
     "lead": "국경의 진창에서 창을 쥐고 밥을 벌었다. 살아남는 법과, 살아남지 못하는 이들을 지켜보는 법을 배웠다."
    },
    {
     "t": "탑의 견습 마법사",
     "check": "",
     "s": "cc_reason",
     "f": "cc_reason",
     "sd": {
      "distset": -1,
      "mag": 3,
      "maxmp": 4,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "견습 인장이 박힌 로브",
     "lead": "탑의 서열 맨 아래에서 잔심부름과 주문을 함께 익혔다. 로브 자락엔 늘 잉크와 재가 묻어 있었다."
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
     "reqflag": "",
     "additem": "봉랍과 인장 세트",
     "lead": "영주청의 차가운 책상에서 남의 운명을 대신 받아 적었다. 잉크 밑에 감춰진 것을 읽는 눈이 생겼다."
    },
    {
     "t": "주사위를 굴리는 도박꾼",
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
     "reqflag": "",
     "additem": "무게가 묘하게 치우친 주사위 한 쌍",
     "lead": "주사위와 함께 뜨고 지는 나날이었다. 운을 믿지 않으면서도, 운으로 먹고살았다."
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
     "reqflag": "",
     "additem": "잘 길든 여행용 류트",
     "lead": "선술집마다 당신의 노래가 남았다. 사람들이 어떤 이야기를 사랑하는지 당신은 누구보다 잘 알았다."
    }
   ],
   "img": "cc_adult.png",
   "imgprompt": "busy medieval town street, tradespeople at work, mercenary post, scribe desk and tavern signboard along the road"
  },
  {
   "id": "cc_reason",
   "ending": false,
   "text": "그렇게 당신은 어른이 되었다. 그리고 어느 밤, 등불을 끄고 조용히 문고리를 잡았다.\n 무엇이 당신을 길 위로 이끌었는가?\n — 이 선택부터, 운명은 온전히 당신의 것이다.",
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
     "reqflag": "",
     "additem": "원수의 인상착의를 적은 쪽지",
     "lead": "가슴에서 지운 적 없는 이름 하나를 품고, 당신은 문을 닫았다."
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
     "reqflag": "",
     "additem": "찢겨 나온 마법서 한 장",
     "lead": "당신을 부르는 책의 속삭임을 따라, 익숙한 화롯가를 등졌다."
    },
    {
     "t": "세상의 진실을 향한 갈증",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "int": 1,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "truth",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "봉인된 밀서",
     "lead": "누구도 말해 주지 않는 것을 알고 싶어서, 당신은 길 위에 섰다."
    },
    {
     "t": "내 이름 위에 붙은 수배령",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "agi": 1,
      "luck": 1,
      "gold": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "wanted",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "위조한 통행증",
     "lead": "이름이 수배지에 오른 그 밤, 당신은 이름을 두고 떠나기로 했다."
    },
    {
     "t": "더 큰 무대를 향한 꿈",
     "check": "",
     "s": "w1_road",
     "f": "w1_road",
     "sd": {
      "distset": -1,
      "tal": 2,
      "gold": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "stage",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "첫 무대의 빛바랜 초대장",
     "lead": "이 좁은 마을이 담기엔 당신의 꿈이 너무 컸다. 더 큰 무대가 어딘가에서 기다리고 있었다."
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
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
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w1_after.png",
   "imgprompt": "morning mist, ornate command carriage entering a battered camp, red-cloaked officer bowing to a bewildered common soldier"
  },
  {
   "id": "w1_end",
   "text": "\"정정은 사령부에 가서 하셔도 됩니다.\" 참모는 부드럽게 웃었다. \"어차피 사람들은 믿고 싶은 이야기를 믿으니까요.\"\n 마차가 잿날의 들판을 벗어난다. 창밖으로, 어젯밤 당신이 지나온 자리들이 천천히 멀어졌다.\n 당신은 영웅이 되러 간다. 그것이 당신이 집을 나온 이유였던가 — 문득, 그 밤의 문소리가 떠올랐다.\n\n — 1장 「잿날의 들판」 끝 —",
   "ending": false,
   "choices": [
    {
     "t": "사령부의 도시로 — 2장 「만들어지는 영웅」",
     "check": "",
     "s": "w2_intro",
     "f": "w2_intro",
     "sd": {
      "distset": 50
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w1_end.png",
   "imgprompt": "view through a carriage window of grey plains rolling past, faint reflection of a thoughtful soldier on the glass"
  },
  {
   "id": "w2_intro",
   "text": "마차는 사흘을 달려 후방의 성채 도시 발크루아에 닿았다.\n 전쟁에서 가장 먼 곳에서, 전쟁이 가장 크게 울리고 있었다. 거리마다 모병 깃발, 벽마다 승전보, 광장마다 당신의 이름.\n 당신이 도착하기도 전에, 당신의 이야기가 먼저 도착해 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "참모를 따라 사령부 본영으로 들어선다",
     "check": "",
     "s": "w2_portrait",
     "f": "w2_portrait",
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
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "\"그 이야기, 절반은 사실이 아니오.\" — 한 번 더 정정을 시도한다",
     "check": "",
     "s": "w2_honest",
     "f": "w2_honest",
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
     "setflag": "honest_twice",
     "reqflag": "ride_honest",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_intro.png",
   "imgprompt": "medieval fortress city street with war propaganda banners and recruitment flags, cheering crowd greeting an arriving carriage, tall stone walls"
  },
  {
   "id": "w2_honest",
   "text": "참모는 걸음을 멈추지 않은 채 웃었다.\n \"각하, 사실이 뭐가 중요합니까. 사람들은 이미 그 이야기를 사랑하는걸요.\n 이제 그 이야기가 각하를 먹여 살리고, 각하가 그 이야기를 먹여 살리는 겁니다. 서로 잘 지내보시죠.\"\n 당신은 처음으로 생각했다 — 이야기는 어쩌면, 사람을 먹고 자라는 짐승일지도 모른다고.",
   "ending": false,
   "choices": [
    {
     "t": "본영으로 들어선다",
     "check": "",
     "s": "w2_portrait",
     "f": "w2_portrait",
     "sd": {
      "distset": -1,
      "int": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_honest.png",
   "imgprompt": "red-cloaked officer smiling while walking through a grand banner-lined hallway, weary hero walking beside him"
  },
  {
   "id": "w2_portrait",
   "text": "본영 대회랑에서 궁정화가가 기다리고 있었다. 모병소마다 걸릴 초상화라 했다.\n 사흘 뒤, 천이 걷혔다. 화폭 속에는 태양을 등지고 선 거인이 있었다. 턱은 더 각지고, 어깨는 더 넓고, 눈은 흔들린 적이 없어 보였다.\n 잘 그린 그림이었다. 문제는 단 하나 — 그것은 당신이 아니었다.",
   "ending": false,
   "choices": [
    {
     "t": "\"훌륭하군.\" — 그대로 걸게 한다",
     "check": "",
     "s": "w2_recital",
     "f": "w2_recital",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "portrait_fake",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "\"닮게 고쳐 주시오.\" — 화가와 마주 앉는다",
     "check": "",
     "s": "w2_portrait_fix",
     "f": "w2_portrait_fix",
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
     "setflag": "portrait_true",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_portrait.png",
   "imgprompt": "grand hall, court painter unveiling an oversized heroic portrait, the real model standing small before it, the painting does not resemble him"
  },
  {
   "id": "w2_portrait_fix",
   "text": "화가는 뜻밖에도 반가운 얼굴을 했다.\n \"고쳐 달라는 분은 처음입니다. 다들 더 크게, 더 빛나게, 만 말씀하시죠.\"\n 그는 밤새 눈가의 피로와 진창의 흉터를 다시 그려 넣었다. 완성된 그림은 덜 웅장했고, 더 사람이었다.\n \"이건 모병소엔 안 걸릴 겁니다.\" 화가가 말했다. \"제 화실에 걸어 두죠. 진짜는 언젠가 값이 오르거든요.\"",
   "ending": false,
   "choices": [
    {
     "t": "화가와 악수하고 회랑을 나선다",
     "check": "",
     "s": "w2_recital",
     "f": "w2_recital",
     "sd": {
      "distset": -1,
      "tal": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_portrait_fix.png",
   "imgprompt": "candlelit painter studio at night, artist reworking a portrait adding scars and tired eyes, small honest painting on easel"
  },
  {
   "id": "w2_recital",
   "text": "저녁, 대연회장에서 음유시인이 「잿날의 영웅가」를 불렀다.\n 노래 속의 당신은 혼자서 백 명을 베고, 무너지는 망루를 어깨로 받치고, 번개 속에서 군기를 세웠다.\n 홀 안의 모두가 노래 속 사내를 사랑하고 있었다 — 당신의 이름을 가진, 당신이 아닌 사내를.",
   "ending": false,
   "choices": [
    {
     "t": "박수에 화답하며 잔을 든다",
     "check": "",
     "s": "w2_faction",
     "f": "w2_faction",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "cheered_lie",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "노래에 없는 것 — 그날 망루 아래의 비명을 기억한다",
     "check": "",
     "s": "w2_rec_soldier",
     "f": "w2_rec_soldier",
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
     "reqflag": "saved_soldier",
     "additem": "",
     "lead": ""
    },
    {
     "t": "깃발 장면만은 진짜다. 그런데 왜 이토록 낯선가",
     "check": "",
     "s": "w2_rec_banner",
     "f": "w2_rec_banner",
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
     "reqflag": "saved_banner",
     "additem": "",
     "lead": ""
    },
    {
     "t": "시인의 류트를 빌려, 내 입으로 그날 밤을 부른다",
     "check": "tal",
     "s": "w2_stage_true",
     "f": "w2_stage_flop",
     "sd": {
      "distset": -1,
      "tal": 2
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "stage",
     "setflag": "took_stage",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_recital.png",
   "imgprompt": "medieval banquet hall, bard with lute performing a heroic ballad to applauding nobles, tapestries and candles, the hero seated with a goblet looking uneasy"
  },
  {
   "id": "w2_rec_soldier",
   "text": "그날 밤 당신은 깃발이 아니라 비명을 골랐다. 노래는 그 선택을 지웠다.\n 연회가 끝난 뒤, 당신은 시인을 불러 세워 낮게 말했다. \"망루 아래 병사가 하나 있었소. 노래에 넣어 주시오. 이름은 몰라도 — 비명은 있었다고.\"\n 시인은 한참 당신을 바라보다 답했다. \"…그 소절은 공짜로 써 드리죠.\"",
   "ending": false,
   "choices": [
    {
     "t": "시인의 어깨를 짚고 홀을 나선다",
     "check": "",
     "s": "w2_faction",
     "f": "w2_faction",
     "sd": {
      "distset": -1,
      "luck": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "bard_verse",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_rec_soldier.png",
   "imgprompt": "after the banquet, hero speaking quietly with a bard in an emptied hall, single candle between them"
  },
  {
   "id": "w2_rec_banner",
   "text": "깃발은 분명 당신이 세웠다. 그날의 함성도 진짜였다.\n 그런데 노래 속 그 장면에는 냄새가 없었다. 타는 살 냄새도, 진흙 냄새도. 비명이 지워진 전장은 축제와 구별되지 않았다.\n 당신은 박수 소리 한가운데서, 아주 조용한 곳에 혼자 서 있는 기분이 들었다.",
   "ending": false,
   "choices": [
    {
     "t": "잔을 내려놓고 자리를 뜬다",
     "check": "",
     "s": "w2_faction",
     "f": "w2_faction",
     "sd": {
      "distset": -1,
      "int": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_rec_banner.png",
   "imgprompt": "hero standing alone amid an applauding banquet crowd, warm light on everyone else, colder light on him, detached expression"
  },
  {
   "id": "w2_stage_true",
   "text": "류트는 낯설었지만, 이야기는 당신의 것이었다.\n 당신은 백 명을 베지 않았다고 노래했다. 무서웠다고, 발이 미끄러졌다고, 운이 좋았다고. 그리고 그 밤에도 사람들은 서로를 붙잡았다고.\n 홀이 조용해졌다 — 그리고 그 침묵은 어떤 박수보다 오래 울렸다.",
   "ending": false,
   "choices": [
    {
     "t": "류트를 시인에게 돌려준다",
     "check": "",
     "s": "w2_faction",
     "f": "w2_faction",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "sang_truth",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_stage_true.png",
   "imgprompt": "hero singing with a borrowed lute on a banquet stage, hushed and attentive audience, honest plain song, candlelight"
  },
  {
   "id": "w2_stage_flop",
   "text": "노래는 셋째 소절에서 흔들렸다. 취한 귀족 하나가 웃음을 터뜨렸고, 시인이 능숙하게 류트를 받아 노래를 원래의 「영웅가」로 되돌렸다.\n 사람들은 안도하며 다시 박수를 쳤다.\n 진실은 박자가 어렵다. 거짓은 언제나 부르기 쉬운 노래다.",
   "ending": false,
   "choices": [
    {
     "t": "구석 자리로 돌아가 잔을 비운다",
     "check": "",
     "s": "w2_faction",
     "f": "w2_faction",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_stage_flop.png",
   "imgprompt": "embarrassed performer faltering on a banquet stage, a drunk noble laughing, the bard smoothly taking back the lute"
  },
  {
   "id": "w2_faction",
   "text": "다음 날 아침, 세 장의 초대장이 도착했다.\n 하나는 금테 — 귀족원 의장의 만찬. 하나는 밀랍 얼룩 — 야전 지휘관들의 작전회의. 하나는 구겨진 종이 — 병사들과 피난민들의 술자리.\n 참모가 말했다. \"셋 다는 못 가십니다. 각하가 어느 자리에 앉는지를, 온 도시가 지켜볼 테니까요.\"",
   "ending": false,
   "choices": [
    {
     "t": "귀족원의 만찬으로 간다",
     "check": "",
     "s": "w2_noble",
     "f": "w2_noble",
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
     "setflag": "faction_noble",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "야전 지휘관들의 회의로 간다",
     "check": "",
     "s": "w2_field",
     "f": "w2_field",
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
     "setflag": "faction_field",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "병사들의 술자리로 간다",
     "check": "",
     "s": "w2_people",
     "f": "w2_people",
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
     "setflag": "faction_people",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_faction.png",
   "imgprompt": "three invitation letters on a wooden desk: a gilded envelope, a wax-stained field order, and a crumpled cheap paper, morning light"
  },
  {
   "id": "w2_noble",
   "text": "샹들리에 아래서 귀족들은 전쟁을 \"시장\"이라 불렀다.\n 곡물가, 무기 납품, 전후 국경선의 지분. 당신의 이름은 그 계산서 위에 찍히는 훌륭한 도장이 되었다.\n 의장이 잔을 들며 속삭였다. \"영웅은 우리가 만듭니다. 그리고 우리는 — 만든 것을 버리는 법도 알지요.\"",
   "ending": false,
   "choices": [
    {
     "t": "미소로 잔을 받아 든다",
     "check": "",
     "s": "w2_armory",
     "f": "w2_armory",
     "sd": {
      "distset": -1,
      "gold": 8,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_noble.png",
   "imgprompt": "opulent candlelit noble banquet, aristocrats toasting over maps and ledgers beneath a chandelier, gold and shadows"
  },
  {
   "id": "w2_field",
   "text": "돌덩이를 지도 위에 올려놓은 회의였다. 훈장도, 연설도 없었다.\n \"영웅 나리, 낭송회는 재미있었소?\" 늙은 지휘관이 비꼬았다 — 그러고는 지도의 한 지점을 짚었다. \"여기서 애들이 일주일에 이백씩 죽소. 노래로는 안 막아지니, 머리를 빌립시다.\"\n 당신은 그 방에서 처음으로, 구경거리가 아니라 쓸모로 대접받았다.",
   "ending": false,
   "choices": [
    {
     "t": "지도 앞으로 의자를 당겨 앉는다",
     "check": "",
     "s": "w2_armory",
     "f": "w2_armory",
     "sd": {
      "distset": -1,
      "str": 1,
      "int": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_field.png",
   "imgprompt": "war room, grizzled commanders around a map with stones as unit markers, lantern light, grim tired faces"
  },
  {
   "id": "w2_people",
   "text": "술자리는 성벽 아래 공터였다. 누군가 당신을 알아봤고, 잠시 술렁였고 — 곧 아무도 신경 쓰지 않았다.\n 그들은 영웅가를 부르지 않았다. 죽은 친구들의 우스운 버릇을 흉내 내며 울다가 웃었다.\n 새벽에 한 피난민 노파가 당신의 잔에 국물을 부어 주며 말했다. \"잘 먹고 다녀요. 이야기 속 사람도 밥은 먹어야지.\"",
   "ending": false,
   "choices": [
    {
     "t": "국물을 두 손으로 받아 마신다",
     "check": "",
     "s": "w2_armory",
     "f": "w2_armory",
     "sd": {
      "distset": -1,
      "luck": 1,
      "maxhp": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_people.png",
   "imgprompt": "soldiers and refugees drinking around a bonfire under a city wall at night, laughing and crying together, humble warmth"
  },
  {
   "id": "w2_armory",
   "text": "사흘째, 병기고 시찰. 창고에는 새 무기들이 줄지어 있었다 — 그리고 안쪽 깊은 곳, 사슬로 묶인 서고가 있었다.\n 군은 그곳을 \"제7 병기고\"라 불렀다. 압수한 마법서를 녹여 전투 부적을 찍어내는 곳. 술사들이 창백한 얼굴로 같은 문양만 반복해 그리고 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "신형 장창을 직접 시험해 본다",
     "check": "str",
     "s": "w2_spear_ok",
     "f": "w2_spear_fail",
     "sd": {
      "distset": -1,
      "str": 1
     },
     "fd": {
      "distset": -1,
      "hp": -2
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "부적 공정을 조용히 눈에 담아 둔다",
     "check": "",
     "s": "w2_speech",
     "f": "w2_speech",
     "sd": {
      "distset": -1,
      "int": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "사슬 서고 안쪽 — 낯익은 장정(裝幀)이 보인다 (마력 3)",
     "check": "",
     "s": "w2_grim",
     "f": "w2_grim",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 3,
     "setreason": "",
     "reqreason": "grimoire",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_armory.png",
   "imgprompt": "vast armory with rows of new spears and shields, at the back a chained library cage, pale scribes endlessly copying the same rune"
  },
  {
   "id": "w2_spear_ok",
   "text": "장창은 손에 익자마자 허수아비를 두 동강 냈다. 대장장이들이 휘파람을 불었다.\n \"역시 영웅님!\" — 하지만 당신은 알고 있었다. 좋은 건 당신의 팔이 아니라 이 창이라는 걸.\n 좋은 무기는 거짓말을 하지 않는다. 그 점이, 요즘 만나는 사람들과 달랐다.",
   "ending": false,
   "choices": [
    {
     "t": "창을 병기고에 돌려놓는다",
     "check": "",
     "s": "w2_speech",
     "f": "w2_speech",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_spear_ok.png",
   "imgprompt": "hero testing a new long spear in an armory yard, clean powerful thrust splitting a training dummy, impressed smiths watching"
  },
  {
   "id": "w2_spear_fail",
   "text": "연회가 사흘, 마차가 사흘 — 몸은 정직하게 굳어 있었다. 창끝이 흔들렸고 어깨가 결렸다.\n 대장장이들이 예의 바르게 딴 곳을 보았다.\n 노래 속 영웅은 녹슬지 않는다. 진짜 몸만 녹슨다.",
   "ending": false,
   "choices": [
    {
     "t": "어깨를 주무르며 병기고를 나선다",
     "check": "",
     "s": "w2_speech",
     "f": "w2_speech",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_spear_fail.png",
   "imgprompt": "hero wincing with a strained shoulder after a failed spear thrust in an armory yard, smiths politely looking away"
  },
  {
   "id": "w2_grim",
   "text": "그 책이었다. 당신을 집에서 불러낸 바로 그 금서가 — 사슬에 묶인 채, \"부적 원료 7-113호\"로 분류되어 있었다.\n 당신이 다가서자 책장이 바람도 없이 파르르 떨렸다. 술사장이 힐끗 보고는 낮게 말했다. \"아는 책입니까. …모른다고 하십시오. 여기서 아는 책은 오래 못 삽니다.\"\n 당신은 마력을 실어 책등을 한 번 쓸었다. 문양 하나가 손끝으로 옮겨 붙었다 — 책이 제 몸의 한 페이지를 당신에게 맡긴 것이다.",
   "ending": false,
   "choices": [
    {
     "t": "아무 일 없었다는 듯 서고를 나선다",
     "check": "",
     "s": "w2_speech",
     "f": "w2_speech",
     "sd": {
      "distset": -1,
      "mag": 2,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "grimoire_page",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_grim.png",
   "imgprompt": "a chained ancient grimoire trembling on a shelf inside a cage library, a hand reaching out, one glowing rune passing onto the fingertip"
  },
  {
   "id": "w2_speech",
   "text": "닷새째, 광장 연설. 참모가 대본을 내밀었다. 「우리는 이기고 있습니다. 영광은 눈앞에 있습니다.」\n 연단 아래에는 수만의 얼굴 — 병사들, 피난민들, 아이를 업은 여인들.\n 당신이 입을 열기를, 도시 전체가 기다리고 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "대본대로 읽는다",
     "check": "",
     "s": "w2_script",
     "f": "w2_script",
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
     "setflag": "speech_script",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "대본을 접고, 내 말로 이야기한다",
     "check": "int",
     "s": "w2_ownwords",
     "f": "w2_stumble",
     "sd": {
      "distset": -1,
      "int": 1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "speech_own_try",
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "대본에서 거짓말 한 줄만 조용히 빼고 읽는다",
     "check": "",
     "s": "w2_script_edit",
     "f": "w2_script_edit",
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
     "setflag": "speech_edit",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_speech.png",
   "imgprompt": "hero on a podium before an enormous medieval crowd filling a plaza, banners everywhere, script paper in his hand"
  },
  {
   "id": "w2_script",
   "text": "당신은 대본을 읽었다. 잘 만들어진 문장들이었다 — 씹을수록 아무 맛도 나지 않는.\n 환호가 광장을 흔들었다. 참모가 흡족하게 고개를 끄덕였다.\n 그날 밤, 당신은 낮의 목소리가 낯설게 기억났다. 꼭 남의 목소리를 빌려 쓴 것처럼.",
   "ending": false,
   "choices": [
    {
     "t": "연단을 내려온다",
     "check": "",
     "s": "w2_night",
     "f": "w2_night",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_script.png",
   "imgprompt": "cheering plaza crowd waving banners, speaker reading from a script with a hollow expression"
  },
  {
   "id": "w2_script_edit",
   "text": "「적은 이미 무너지고 있습니다」 — 그 한 줄만, 당신은 소리 내지 않았다.\n 아무도 눈치채지 못했다. 환호는 똑같이 터졌다.\n 하지만 당신은 알고 있었다. 오늘 광장에서 단 한 문장만은 거짓말이 아니었다는 걸. 그리고 그 한 문장이 당신의 것이었다는 걸.",
   "ending": false,
   "choices": [
    {
     "t": "연단을 내려온다",
     "check": "",
     "s": "w2_night",
     "f": "w2_night",
     "sd": {
      "distset": -1,
      "luck": 1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_script_edit.png",
   "imgprompt": "close view of hands folding a speech paper with one line quietly crossed out, podium and crowd blurred beyond"
  },
  {
   "id": "w2_ownwords",
   "text": "\"저는 백 명을 베지 않았습니다.\" — 광장이 조용해졌다.\n \"하지만 그날 밤, 서로를 붙잡은 손이 백 개는 넘었을 겁니다. 이 전쟁을 버티는 건 영웅이 아니라 그 손들입니다.\"\n 잠깐의 정적 뒤에 터진 환호는 대본 때보다 낮았지만 — 훨씬 오래갔다. 연단을 내려올 때, 늙은 병사 하나가 소리 없이 경례했다.",
   "ending": false,
   "choices": [
    {
     "t": "경례에 목례로 답한다",
     "check": "",
     "s": "w2_night",
     "f": "w2_night",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "speech_own",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_ownwords.png",
   "imgprompt": "hero speaking earnestly from the podium without script, vast crowd silent and attentive, an old soldier saluting quietly"
  },
  {
   "id": "w2_stumble",
   "text": "내 말은 대본보다 무거웠고, 혀는 그 무게에 걸려 넘어졌다.\n 광장에 어색한 침묵이 흘렀고, 참모가 재빨리 나서서 만세를 선창했다. 환호는 터졌지만 — 당신을 지나쳐 갔다.\n 그날 밤 참모가 말했다. \"보셨죠. 그래서 대본이 있는 겁니다.\"",
   "ending": false,
   "choices": [
    {
     "t": "말없이 연단을 내려온다",
     "check": "",
     "s": "w2_night",
     "f": "w2_night",
     "sd": {
      "distset": -1,
      "dist": -8
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "speech_stumble",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_stumble.png",
   "imgprompt": "awkward silence over a huge plaza crowd, frozen speaker at the podium, an aide stepping forward raising a fist to lead a chant"
  },
  {
   "id": "w2_night",
   "text": "엿새째 밤, 숙소. 내일이면 전선 시찰 길에 오른다.\n 탁자 위에는 새로 맞춘 의장용 갑옷이 놓여 있다 — 거울처럼 닦인, 화살 한 번 막아 본 적 없는 갑옷.\n 창밖에서는 아직도 누군가 「잿날의 영웅가」를 부르고 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "갑옷을 입어 보고, 거울 앞에 선다",
     "check": "",
     "s": "w2_orders",
     "f": "w2_orders",
     "sd": {
      "distset": 0,
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
     "reqflag": "",
     "additem": "",
     "lead": ""
    },
    {
     "t": "문 두드리는 소리 — 낯익은 앳된 얼굴이 서 있다",
     "check": "",
     "s": "w2_boy",
     "f": "w2_boy",
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
     "reqflag": "saved_soldier",
     "additem": "",
     "lead": ""
    },
    {
     "t": "소포가 하나 와 있다 — 진창의 그 노파에게서",
     "check": "",
     "s": "w2_letter",
     "f": "w2_letter",
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
     "reqflag": "told_name",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_night.png",
   "imgprompt": "night quarters, a mirror-polished ceremonial armor on a stand by the window, distant city faintly singing, single candle"
  },
  {
   "id": "w2_boy",
   "text": "그날 망루의 소년병이었다. 정식 배속장을 들고, 사령부까지 당신을 따라온 것이다.\n \"종군 시종 자리에 지원했습니다. 각하 곁이라면요.\" 소년은 굳은 얼굴로 덧붙였다. \"저는 노래는 안 믿습니다. 제가 본 것만 믿습니다.\"\n 당신 곁에, 당신을 노래가 아니라 제 눈으로 기억하는 사람이 한 명 생겼다.",
   "ending": false,
   "choices": [
    {
     "t": "배속장에 서명해 준다",
     "check": "",
     "s": "w2_orders",
     "f": "w2_orders",
     "sd": {
      "distset": 0,
      "maxhp": 1,
      "dist": -6
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "squire",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_boy.png",
   "imgprompt": "young soldier boy standing at a candlelit doorway holding assignment papers, determined face, hero surprised"
  },
  {
   "id": "w2_letter",
   "text": "소포 안에는 거칠게 짠 목도리와 짧은 편지가 있었다.\n 「이름을 말해 준 젊은이에게. 국경은 밤이 춥다고 들었소. 이름값을 하려 들지 말고, 목이나 잘 감싸고 다니시오.」\n 당신은 한참 웃었다. 그리고 목도리를 의장용 갑옷 위에 둘렀다. 이 도시에서 받은 것 중 처음으로 — 당신에게 맞는 물건이었다.",
   "ending": false,
   "choices": [
    {
     "t": "목도리를 매고 잠자리에 든다",
     "check": "",
     "s": "w2_orders",
     "f": "w2_orders",
     "sd": {
      "distset": 0,
      "luck": 1,
      "dist": -6
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "mcost": 0,
     "setreason": "",
     "reqreason": "",
     "setflag": "scarf",
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_letter.png",
   "imgprompt": "a rough hand-knitted scarf and a short letter unwrapped on a wooden table beside gleaming ceremonial armor, candlelight"
  },
  {
   "id": "w2_orders",
   "text": "이레째 새벽, 출정 명령이 내려왔다.\n 동부 전선 — 잿날보다 더 동쪽. 명령서 말미에는 참모의 급한 글씨가 덧붙어 있었다.\n 「카렐도 \"영웅\"을 세웠다 합니다. \"재의 기사\"라고. …각하의 이야기와 놈들의 이야기가, 곧 마주칠 겁니다.」\n\n — 2장 「만들어지는 영웅」 끝. 3장 「거울 전선」 준비 중 —",
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
     "reqflag": "",
     "additem": "",
     "lead": ""
    }
   ],
   "img": "w2_orders.png",
   "imgprompt": "dawn light on a desk with sealed marching orders, window facing the eastern horizon, armor stand with a rough scarf draped over it"
  }
 ]
};
