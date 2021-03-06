const DATA_CASE = [
  {
    key: '肥东县',
    list: ['117.427506,31.895833,陈大郢社区紫玉华府',
      '117.494224,31.883583,店埠镇定光社区新农村小区',
      '117.458584,31.896521,店埠镇光大居委会光大新村',
      '117.466085,31.896163,店埠镇和平社区汇景新城',
      '117.459392,31.874001,店埠镇新城社区新城家园',
      '117.478499,31.889884,店埠镇镇南社区',
      '117.477684,31.890811,店埠镇青春社区育红小学宿舍楼',
      '117.494224,31.883583,店埠镇定光社区传桥组',
      '117.84373,32.077629,马湖乡马湖社区',
      '117.852802,32.054828,马湖乡沙河村',
      '117.684292,32.145053,八斗镇王城社区',
      '117.574411,31.905293,石塘镇龙城社区',
      '117.639939,31.93797,石塘镇供销社宿舍',
      '117.487648,31.95986,牌坊回族满族乡民新村',
      '117.455395,31.896642,店埠镇凯旋公馆',
      '117.60028,31.896862,石塘镇新展社区'
    ]
  },
  {
    key: '肥西县',
    list: [
      '117.201326,31.69008,上派镇韩圩村',
      '117.170393,31.732746,上派镇华邦万派城',
      '117.179595,31.789791,桃花镇东冠繁华逸城',
      '117.171392,31.786059,桃花镇信地华地城',
      '116.79225,31.76846,铭传乡墩塘村',
      '116.777783,31.678538,山南镇光明村'
    ]
  },
  {
    key: '长丰县',
    list: [
      '117.19813,31.952126,岗集镇玉成明珠苑',
      '117.264533,31.957851,阿奎利亚城品',
      '117.256667,32.208906,下塘镇顾圩村'
    ]
  },
  {
    key: '庐江县',
    list: [
      '117.301121,31.263588,庐城镇翠绿园',
      '117.399161,30.988277,罗河镇鲍店村',
      '117.438949,31.071198,矾山镇新中村',
      '117.19249,31.195572,柯坦镇城池村',
      '117.340362,31.275924,冶父山镇冶父山社区',
      '117.176552,31.38256,金牛镇铺岗村',
      '117.298829,31.482542,同大镇施丰村',
      '117.265351,31.084395,罗河镇吉桥村'
    ]
  },
  {
    key: '巢湖市',
    list: [
      '117.884472,31.622419,凤凰山街道城市之光C区',
      '117.620552,31.422466,槐林镇武山居委会'
    ]
  },
  {
    key: '瑶海区',
    list: [
      '117.309993,31.892159,临泉花苑小区',
      '117.307049,31.887935,怡馨苑',
      '117.38432,31.871841,华都城市花园',
      '117.297459,31.894408,元一名城',
      '117.328291,31.879792,凤翔家园',
      '117.304492,31.882357,恒大中央广场',
      '117.316008,31.880239,温莎国际广场',
      '117.33319,31.873209,长江东路五里井17栋',
      '117.330442,31.877155,铜陵路工业锅炉厂宿舍',
      '117.374088,31.880635,斯瑞新景苑',
      '117.330529,31.875132,恒丰嘉园',
      '117.394254,31.87404,新创益民家园',
      '117.340107,31.87926,芳邻家园',
      '117.360704,31.871896,大兴镇合浦新村（恢复楼）'
    ]
  },
  {
    key: '庐阳区',
    list: [
      '117.291757,31.909907,探矿厂宿舍',
      '117.278023,31.882968,柏景湾青云轩',
      '117.262834,31.880638,古城新村',
      '117.293322,31.900958,杏林花园南区',
      '117.272887,31.898442,海亮红玺台小区',
      '117.275272,31.899476,海棠别院'
    ]
  },
  {
    key: '蜀山区',
    list: [
      '117.232031,31.836028,当代花园',
      '117.243143,31.873707,中央美域A区',
      '117.217465,31.814236,天和园',
      '117.220322,31.82185,内森庄园',
      '117.250595,31.876861,中铁青秀城',
      '117.266745,31.874394,和谐家园（长丰南路）',
      '117.248554,31.863732,颐和阳光100小区',
      '117.248281,31.871345,龙居山庄天龙居',
      '117.22733,31.805533,颐园世家',
      '117.229927,31.85737,岳西新村B区',
      '117.271728,31.848828,安徽电力公司黄山路生活区',
      '117.255879,31.852971,通和易居北苑'
    ]
  },
  {
    key: '包河区',
    list: [
      '117.282056,31.830598,曙宏南苑',
      '117.28879,31.738861,滨湖明珠西区',
      '117.284451,31.713328,豪门金地小区',
      '117.312875,31.855629,金湾嘉园',
      '117.292618,31.840239,宝利丰广场',
      '117.296376,31.75382,琼林苑小区'
    ]
  },
  {
    key: '高新区',
    list: [
      '117.156127,31.828954,岭湖墅'
    ]
  },
  {
    key: '新站区',
    list: [
      '117.379427,31.910114,合郢花园',
      '117.327947,31.902247,家天下3期',
      '117.312057,31.904238,昊天园小区',
      '117.349143,31.905215,新海尚宸家园',
      '117.362138,31.892728,园上园公寓楼',
      '117.355525,31.930388,京商商贸城',
      '117.331305,31.924482,金辉悦府小区',
      '117.324845,31.911331,张洼新村'
    ]
  }
]

const DATA_STATISTICS = {
  update: {
    date: '2020/02/07 22:00',
    url: 'http://wjw.hefei.gov.cn/ztzl/xxgzbdgrdfyyqfk/xxfb/17724493.html',
    author: '合肥卫健委'
  },
  count: {
    people: 115,
    newPeople: 11,
    community: 82,
    newCommunity: 4
  }
}

export { DATA_CASE, DATA_STATISTICS }
