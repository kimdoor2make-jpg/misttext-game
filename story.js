// 스토리 단일 소스 — editor.html에서 편집·내보내기
window.STORY_DATA = {
 "nodes": [
  {
   "id": "intro",
   "text": "무월의 밤, 왕관이 떨어진 뒤로 잊힌 것들은 안개가 되었다.\n 안개나루의 푸른 등불만이 아직 당신의 이름을 지켜 주고 있다.\n 나루지기가 낡은 지도를 내민다.\n \"해류 봉화의 불이 꺼졌네. 이름을 되부르는 불이 꺼지면, 이 나루도 오래 버티지 못해.\"",
   "ending": false,
   "choices": [
    {
     "t": "지도를 받아 들고 길을 나선다",
     "check": "",
     "s": "fork",
     "f": "fork",
     "sd": {
      "dist": -2,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "떠나기 전 등불 아래에서 내 이름을 세 번 되뇐다",
     "check": "",
     "s": "name_rite",
     "f": "name_rite",
     "sd": {
      "ember": 1,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "name_rite",
   "text": "당신은 푸른 등불 아래 무릎을 꿇고 제 이름을 되뇌었다.\n 세 번째 부름에 등불이 화답하듯 일렁이며, 불티 하나가 당신의 옷깃에 내려앉았다.\n 잊히지 않겠다는 다짐은, 이 세계에서 가장 오래가는 무기다.",
   "ending": false,
   "choices": [
    {
     "t": "길을 나선다",
     "check": "",
     "s": "fork",
     "f": "fork",
     "sd": {
      "dist": -2,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "fork",
   "text": "나루를 벗어나자 안개가 무릎까지 차올랐다.\n 길은 둘로 갈라진다. 왼쪽은 소금꽃이 하얗게 핀 소금늪 — 소금은 기억을 절인다고 했다.\n 오른쪽은 재를 쓴 소나무들이 늘어선 잿빛 숲. 불탔던 날을 나무들만 기억하는 곳이다.",
   "ending": false,
   "choices": [
    {
     "t": "소금늪 길로 간다",
     "check": "",
     "s": "marsh",
     "f": "marsh",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "잿빛 숲 길로 간다",
     "check": "",
     "s": "ambush",
     "f": "ambush",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "marsh",
   "text": "소금꽃 아래, 늪이 삼킨 이름들이 느리게 뒤척인다.\n 수면 위로 반쯤 잠긴 돌 제단이 보였다. 오래된 별빛이 제단 위에 고여 있다.\n 별은 잊는 법을 모른다 — 스승들이 그렇게 가르쳤다.",
   "ending": false,
   "choices": [
    {
     "t": "제단의 별빛에 손을 얹고 옛 노래를 떠올린다",
     "check": "mem",
     "s": "marsh_success",
     "f": "marsh_fail",
     "sd": {
      "ember": 2,
      "mem": 1,
      "distset": -1
     },
     "fd": {
      "hp": -2,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "위험하다. 제단을 지나쳐 간다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "marsh_success",
   "text": "노래의 첫 소절을 떠올리자 별빛이 당신의 손끝을 타고 올라왔다.\n 낡은 기억이 따뜻하게 데워지고, 불티 두 점이 옷깃에 스몄다.\n 늪 저편에서 누군가 — 혹은 무언가가 — 당신의 노래를 따라 흥얼거렸다.",
   "ending": false,
   "choices": [
    {
     "t": "계속 나아간다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "marsh_fail",
   "text": "노래는 두 번째 소절에서 끊겼다. 당신이 잊은 자리로 안개가 파고들었다.\n 차가운 소금물이 정강이를 훑고 지나가며, 무언가를 가져갔다.\n 무엇을 잃었는지조차 기억나지 않는 것이 가장 아팠다.",
   "ending": false,
   "choices": [
    {
     "t": "몸을 추스르고 나아간다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ambush",
   "text": "아주 작은 소리였지만, 당신은 풀숲에서 뭔가 움직이는 것 같은 소리를 들었다. 그리고 그 직후 쉭---!\n 파공성과 함께 당신에게 뭔가 날아왔다.",
   "ending": false,
   "choices": [
    {
     "t": "옆으로 피한다",
     "check": "agi",
     "s": "ambush_dodge",
     "f": "ambush_hit",
     "sd": {
      "agi": 1,
      "distset": -1
     },
     "fd": {
      "hp": -3,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "튕겨낸다",
     "check": "grit",
     "s": "ambush_parry",
     "f": "ambush_hit",
     "sd": {
      "grit": 1,
      "distset": -1
     },
     "fd": {
      "hp": -3,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ambush_dodge",
   "text": "몸이 먼저 움직였다. 화살 아닌 뼈붙이 하나가 귓가를 스치고 소나무에 박혔다.\n 풀숲에서 안개쥐 한 마리가 튀어나와 이빨을 드러냈다 — 안개에 길든 추적자. 약한 틈을 놓치지 않는 놈들이다.\n 하지만 당신의 발놀림이 더 빨랐다. 놈은 곧 안개 속으로 흩어졌다.",
   "ending": false,
   "choices": [
    {
     "t": "놈이 떨어뜨린 것을 줍는다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "gold": 4,
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ambush_parry",
   "text": "당신은 물러서는 대신 팔을 들어 쳐냈다. 뼈붙이가 쨍 소리를 내며 튕겨 나갔다.\n 풀숲의 안개쥐가 멈칫했다. 놈들은 겁내지 않는 자를 공격하는 법을 잊었다.\n 당신이 한 걸음 내딛자, 놈은 꼬리를 말고 안개 속으로 사라졌다.",
   "ending": false,
   "choices": [
    {
     "t": "가슴을 펴고 나아간다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ambush_hit",
   "text": "반응이 늦었다. 뼈붙이가 어깨를 스치며 살을 찢었다.\n 상처에서 피 대신 옅은 안개가 새어 나오는 것을 보고 당신은 이를 악물었다.\n 잊힘은 언제나 상처에서 먼저 시작된다.",
   "ending": false,
   "choices": [
    {
     "t": "상처를 동여매고 나아간다",
     "check": "",
     "s": "bell",
     "f": "bell",
     "sd": {
      "dist": -4,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "bell",
   "text": "길이 다시 하나로 모이는 곳, 물에 잠긴 종루가 서 있었다.\n 물에 잠긴 종이 울릴 때마다 잃어버린 기억이 떠오른다고 했다.\n 종루 아래 그늘에서 등짐을 진 상인이 손을 흔든다. \"산 사람은 오랜만이군! 구경하고 가게.\"",
   "ending": false,
   "choices": [
    {
     "t": "종에 잠수해 종을 울린다",
     "check": "grit",
     "s": "bell_ring",
     "f": "bell_fail",
     "sd": {
      "gold": 6,
      "ember": 2,
      "distset": -1
     },
     "fd": {
      "hp": -3,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "상인에게서 소금절임 약초를 산다 (금화 5)",
     "check": "",
     "s": "merchant_buy",
     "f": "merchant_buy",
     "sd": {
      "hp": 5,
      "gold": -5,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 5,
     "ecost": 0
    },
    {
     "t": "종루를 지나 봉화 절벽으로 향한다",
     "check": "",
     "s": "beacon_gate",
     "f": "beacon_gate",
     "sd": {
      "dist": -8,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "bell_ring",
   "text": "차가운 물속에서 당신은 온 힘으로 종을 밀었다.\n 우우웅 — 물을 타고 번진 종소리에 안개가 크게 출렁였다.\n 종루 바닥에 가라앉아 있던 여행자의 유품이 떠올랐다. 그리고 잠깐, 아주 잠깐, 당신은 고향의 아침 냄새를 기억해 냈다.",
   "ending": false,
   "choices": [
    {
     "t": "유품을 챙기고 봉화 절벽으로 향한다",
     "check": "",
     "s": "beacon_gate",
     "f": "beacon_gate",
     "sd": {
      "dist": -8,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "bell_fail",
   "text": "종은 꿈쩍도 하지 않았다. 대신 종소리를 기다리던 것이 물 밑에서 눈을 떴다.\n 잠긴 종루에 남은 기억이 갑옷처럼 굳은 것 — 종루 수호자였다.\n 당신은 굳은 손아귀에서 간신히 발목을 빼내고 물가로 기어올랐다.",
   "ending": false,
   "choices": [
    {
     "t": "젖은 몸으로 봉화 절벽으로 향한다",
     "check": "",
     "s": "beacon_gate",
     "f": "beacon_gate",
     "sd": {
      "dist": -8,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "merchant_buy",
   "text": "상인은 금화를 받아 이로 깨물어 보고는 씩 웃었다.\n \"소금에 절인 약초야. 소금은 기억을 절이지 — 상처도 좀 덜 잊게 해 주고.\"\n 쓰디쓴 약초를 씹자 어깨의 통증이 가라앉았다.",
   "ending": false,
   "choices": [
    {
     "t": "봉화 절벽으로 향한다",
     "check": "",
     "s": "beacon_gate",
     "f": "beacon_gate",
     "sd": {
      "dist": -8,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "beacon_gate",
   "text": "절벽 끝, 꺼진 해류 봉화가 보인다. 푸른 불씨의 이름을 이제는 돌껍질 수호자만이 기억한다.\n 봉화 앞을 막아선 수호자가 천천히 고개를 들었다. 봉화가 처음 세워졌을 때부터 잠들지 않은 문지기다.\n \"불을 원하는 자여. 이 불의 이름을 말하라.\"",
   "ending": false,
   "choices": [
    {
     "t": "나루지기의 지도 여백에 적힌 옛 글자를 떠올린다",
     "check": "mem",
     "s": "beacon_lit",
     "f": "guardian_fight",
     "sd": {
      "mem": 1,
      "distset": 0
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "힘으로 밀고 지나간다",
     "check": "grit",
     "s": "guardian_beaten",
     "f": "guardian_lose",
     "sd": {
      "grit": 1,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "guardian_fight",
   "text": "이름이 혀끝에서 맴돌다 흩어졌다. 수호자의 돌껍질이 굉음을 내며 일어섰다.\n \"잊은 자는 지나지 못한다.\"\n 돌주먹이 절벽을 내리찍었다. 피할 곳은 많지 않다.",
   "ending": false,
   "choices": [
    {
     "t": "절벽 가장자리로 굴러 피한다",
     "check": "agi",
     "s": "guardian_beaten",
     "f": "guardian_lose",
     "sd": {
      "agi": 1,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "guardian_beaten",
   "text": "싸움 끝에 수호자가 한쪽 무릎을 꿇었다. 돌껍질 틈에서 낮은 목소리가 새어 나왔다.\n \"...오랜만이군, 물러서지 않는 자는. 불의 이름은 '첫 항해'다. 네가 대신 기억해 다오.\"\n 수호자는 그렇게 말하고 다시 돌이 되었다.",
   "ending": false,
   "choices": [
    {
     "t": "봉화에 불씨를 바친다 (불씨 3)",
     "check": "",
     "s": "beacon_lit",
     "f": "beacon_lit",
     "sd": {
      "distset": 0
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 3
    },
    {
     "t": "제 피로 불을 먹인다 (생명 4)",
     "check": "",
     "s": "beacon_lit",
     "f": "beacon_lit",
     "sd": {
      "hp": -4,
      "distset": 0
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "guardian_lose",
   "text": "돌주먹이 어깨를 스쳤을 뿐인데 눈앞이 하얘졌다.\n 당신은 절벽 아래 덤불로 굴러떨어졌다. 온몸이 아프지만 — 아픔은 살아 있다는 증거이자, 아직 잊히지 않았다는 증거다.\n 절벽 위에서 수호자가 기다리고 있다.",
   "ending": false,
   "choices": [
    {
     "t": "다시 기어오른다",
     "check": "",
     "s": "beacon_gate",
     "f": "beacon_gate",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "beacon_lit",
   "text": "\"첫 항해.\" 당신이 이름을 부르자, 봉화가 화답했다.\n 푸른 불길이 절벽을 타고 솟아올라 바다 안개를 갈랐다. 수평선 너머 잿불 봉화가 있는 산등성이가 처음으로 모습을 드러냈다.\n 두 봉화가 서로의 이름을 부를 때에만, 정상으로 오르는 길이 기억난다.\n 기억하는 한, 안개는 길이 된다.",
   "ending": false,
   "choices": [
    {
     "t": "산등성이를 향해 오른다 — 2장 「잿불 봉화」",
     "check": "",
     "s": "ch2_intro",
     "f": "ch2_intro",
     "sd": {
      "distset": 50
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ch2_intro",
   "text": "해류 봉화의 푸른 불이 등 뒤에서 바다를 지킨다. 이제 산이다.\n 잿불 봉화는 재를 쓴 소나무 숲 위, 산등성이 끝에 잠들어 있다.\n 산기슭에는 잿더미가 된 사냥꾼 마을이 보였다. 재를 쓴 소나무들은 불탔던 날을 기억하지만, 이곳의 사냥꾼들은 잊은 지 오래다.",
   "ending": false,
   "choices": [
    {
     "t": "잿더미 마을을 가로지른다",
     "check": "",
     "s": "ash_village",
     "f": "ash_village",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "벼랑 능선으로 질러간다",
     "check": "agi",
     "s": "ridge_ok",
     "f": "ridge_fall",
     "sd": {
      "agi": 1,
      "dist": -12,
      "distset": -1
     },
     "fd": {
      "hp": -3,
      "dist": -6,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ash_village",
   "text": "무너진 굴뚝 사이로 아직 가는 연기가 오른다. 사람이 산다.\n 잿빛 얼굴의 늙은 사냥꾼이 활을 내리지 않은 채 물었다. \"뭘 찾으러 왔나.\"\n 이름을 되부르러 왔다고 답하자 그는 코웃음을 쳤다.\n \"이름? 그런 건 짐만 되지. 나도 내 것을 어디 뒀는지 잊었네.\"",
   "ending": false,
   "choices": [
    {
     "t": "그의 잊힌 이름을 함께 더듬는다",
     "check": "mem",
     "s": "hunter_named",
     "f": "hunter_blank",
     "sd": {
      "ember": 2,
      "mem": 1,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "말없이 고개를 숙이고 지나간다",
     "check": "",
     "s": "echo",
     "f": "echo",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "hunter_named",
   "text": "당신은 그의 활시위 감는 버릇에서, 화살깃의 매듭에서, 이름의 조각을 주웠다.\n \"…토르멘.\" 당신이 부르자 노인의 활이 툭 떨어졌다.\n 그는 울지 않으려고 아주 오래 참았다. \"…산길은 내가 안다. 따라오게.\"",
   "ending": false,
   "choices": [
    {
     "t": "사냥꾼의 지름길로 오른다",
     "check": "",
     "s": "echo",
     "f": "echo",
     "sd": {
      "gold": 3,
      "dist": -10,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "hunter_blank",
   "text": "당신이 부른 이름은 그의 것이 아니었다.\n 노인은 잠시나마 기대했던 자신을 부끄러워하며 등을 돌렸다.\n 안개가 마을 위로 조금 더 내려앉았다.",
   "ending": false,
   "choices": [
    {
     "t": "무거운 걸음으로 마을을 나선다",
     "check": "",
     "s": "echo",
     "f": "echo",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ridge_ok",
   "text": "바람이 칼처럼 부는 능선을 당신은 춤추듯 건넜다. 발밑에서 구른 돌이 한참 뒤에야 바닥에 닿는 소리를 냈다.\n 능선 끝에서 내려다본 숲에는 — 당신을 따라 움직이는 안개 한 줄기가 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "숲으로 내려선다",
     "check": "",
     "s": "echo",
     "f": "echo",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ridge_fall",
   "text": "바람이 등을 떠밀었다. 당신은 벼랑 대신 가시덤불로 떨어지는 쪽을 택했다.\n 온몸이 긁혔지만, 목숨은 덤불이 받아 주었다.",
   "ending": false,
   "choices": [
    {
     "t": "가시를 뽑으며 숲으로 향한다",
     "check": "",
     "s": "echo",
     "f": "echo",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "echo",
   "text": "숲의 안개가 사람 형상으로 뭉친다. 키도, 걸음걸이도, 어깨의 상처까지 — 당신이다.\n 안개 메아리. 안개가 먹은 기억이 형체를 얻은 것이다.\n 메아리가 당신의 목소리로 말했다. \"돌아가. 잊는 편이 덜 아파.\"",
   "ending": false,
   "choices": [
    {
     "t": "맞서 벤다",
     "check": "grit",
     "s": "echo_win",
     "f": "echo_hurt",
     "sd": {
      "ember": 1,
      "grit": 1,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "그 기억을 내 것으로 받아들인다",
     "check": "mem",
     "s": "echo_embrace",
     "f": "echo_hurt",
     "sd": {
      "ember": 2,
      "mem": 2,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "echo_win",
   "text": "당신의 칼이 메아리를 갈랐다. 안개는 비명 대신 낮은 한숨을 내쉬며 흩어졌다.\n 흩어진 자리에 불티 하나가 남았다.\n 잊히기 싫었던 기억 하나가, 당신을 시험했던 것이다.",
   "ending": false,
   "choices": [
    {
     "t": "불티를 주워 산을 오른다",
     "check": "",
     "s": "merchant2",
     "f": "merchant2",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "echo_embrace",
   "text": "당신은 칼을 내리고 메아리의 눈을 마주 보았다. \"그래. 그것도 나다.\"\n 메아리가 천천히 고개를 끄덕이며 당신 안으로 걸어 들어왔다.\n 잊고 싶었던 기억이 상흔이 되어 가슴에 새겨졌다. 상흔은 잊힘에 맞선 증거다.",
   "ending": false,
   "choices": [
    {
     "t": "가슴의 상흔을 짚고 산을 오른다",
     "check": "",
     "s": "merchant2",
     "f": "merchant2",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "echo_hurt",
   "text": "메아리는 당신보다 당신을 잘 알았다. 당신이 주저하는 곳을 정확히 파고들었다.\n 무릎 꿇은 당신을 잠시 내려다보다가, 메아리는 흥미를 잃은 듯 안개로 돌아갔다.",
   "ending": false,
   "choices": [
    {
     "t": "이를 악물고 산을 오른다",
     "check": "",
     "s": "merchant2",
     "f": "merchant2",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "merchant2",
   "text": "산중턱 바위 그늘에 낯익은 등짐이 보인다. 종루의 그 상인이다.\n \"또 만났군! 이 산엔 손님이 귀해서 말이야.\" 그가 익숙한 손놀림으로 좌판을 펼쳤다.",
   "ending": false,
   "choices": [
    {
     "t": "소금절임 약초를 산다 (금화 6)",
     "check": "",
     "s": "prophet_gate",
     "f": "prophet_gate",
     "sd": {
      "hp": 6,
      "gold": -6,
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 6,
     "ecost": 0
    },
    {
     "t": "마른 부싯깃을 산다 (금화 8)",
     "check": "",
     "s": "prophet_gate",
     "f": "prophet_gate",
     "sd": {
      "gold": -8,
      "ember": 4,
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 8,
     "ecost": 0
    },
    {
     "t": "눈인사만 하고 계속 오른다",
     "check": "",
     "s": "prophet_gate",
     "f": "prophet_gate",
     "sd": {
      "dist": -6,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "prophet_gate",
   "text": "마지막 계단 앞, 잿빛 장막이 길을 봉했다. 장막 너머에서 눈 없는 얼굴이 떠올랐다 — 안개 예언자다.\n \"오르려는 자여. 안개는 결국 모든 것을 잊게 하리라.\n 너는 무엇으로 그것을 막겠느냐.\"",
   "ending": false,
   "choices": [
    {
     "t": "지나온 이들의 이름을 하나씩 답한다",
     "check": "mem",
     "s": "prophet_pass",
     "f": "prophet_fail",
     "sd": {
      "mem": 1,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    },
    {
     "t": "타오르는 불씨를 장막에 흩뿌린다 (불씨 4)",
     "check": "",
     "s": "prophet_pass",
     "f": "prophet_pass",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 4
    },
    {
     "t": "장막을 찢고 지나간다",
     "check": "grit",
     "s": "prophet_pass",
     "f": "prophet_fail",
     "sd": {
      "grit": 1,
      "distset": -1
     },
     "fd": {
      "hp": -4,
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "prophet_pass",
   "text": "나루지기, 토르멘, 돌껍질 수호자, 종루의 상인…\n 당신이 이름을 하나씩 부를 때마다 장막이 한 겹씩 벗겨졌다.\n 예언자는 끝까지 눈 없는 얼굴을 당신에게 향한 채, 조용히 길을 비켰다.\n \"기억하는 자는… 오래 아프리라. 그러나, 오래 남으리라.\"",
   "ending": false,
   "choices": [
    {
     "t": "마지막 계단을 오른다",
     "check": "",
     "s": "ember_beacon",
     "f": "ember_beacon",
     "sd": {
      "dist": -12,
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "prophet_fail",
   "text": "이름 하나가 비어 있었다. 그 빈자리로 장막이 밀려들어 폐를 채웠다.\n 당신은 계단 아래로 굴러떨어져 차가운 재 위에서 숨을 몰아쉬었다.\n 장막은 아무 일 없었다는 듯 다시 길을 봉했다.",
   "ending": false,
   "choices": [
    {
     "t": "다시 계단 앞에 선다",
     "check": "",
     "s": "prophet_gate",
     "f": "prophet_gate",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ember_beacon",
   "text": "산등성이 끝, 거대한 화로가 차갑게 식어 있다. 잿불 봉화다.\n 화로 가장자리에 재에 덮인 오래된 글씨가 있다. 손으로 쓸어 내자 드러났다.\n \"나의 이름은 '겨울나기'. 나를 부르는 이에게 불을.\"\n 봉화는 제 이름을 잊지 않았다. 다만 불러 줄 사람을 기다리고 있었다.",
   "ending": false,
   "choices": [
    {
     "t": "\"겨울나기.\" — 불씨를 바쳐 불을 먹인다 (불씨 5)",
     "check": "",
     "s": "ch2_lit",
     "f": "ch2_lit",
     "sd": {
      "distset": 0
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 5
    },
    {
     "t": "제 피로 불을 먹인다 (생명 5)",
     "check": "",
     "s": "ch2_lit",
     "f": "ch2_lit",
     "sd": {
      "hp": -5,
      "distset": 0
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "ch2_lit",
   "text": "잿불 봉화가 붉게 타올랐다. 바다 쪽에서 푸른 불이 화답한다.\n 해류와 잿불 — 두 봉화가 서로의 이름을 부르자, 정상으로 오르는 길이 안개 속에서 천천히 모습을 드러냈다.\n 길 끝에 검은 탑이 서 있다. 흑요석 관문. 모든 잊힘이 시작된 곳. 저 문을 넘으면 돌아갈 길은 없다.\n 기억하는 한, 안개는 길이 된다.",
   "ending": false,
   "choices": [
    {
     "t": "처음부터 다시 (3장 「흑요석 관문」은 준비 중)",
     "check": "",
     "s": "intro",
     "f": "intro",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  },
  {
   "id": "forgotten",
   "text": "무릎이 꺾이고, 시야 가장자리부터 안개가 스며들었다.\n 당신의 이름이 혀끝에서 멀어진다. 안개나루의 푸른 등불이 아득하게 깜빡였다.\n ...하지만 등불은 아직 꺼지지 않았다. 누군가 그곳에서 당신의 이름을 대신 부르고 있다.",
   "ending": true,
   "choices": [
    {
     "t": "등불의 부름에 답하며 눈을 뜬다 (처음부터)",
     "check": "",
     "s": "intro",
     "f": "intro",
     "sd": {
      "distset": -1
     },
     "fd": {
      "distset": -1
     },
     "cost": 0,
     "ecost": 0
    }
   ]
  }
 ]
};
