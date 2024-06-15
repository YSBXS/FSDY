/* 直播弹幕 -> vod_area:'bilidanmu'
目前只有皮皮虾大佬的DMBox, 支持弹幕
DMBox下载:https://t.me/pipixiawerun
设置 > 窗口预览 > 开启
*/

/* Cookie设置
Cookie改为预设获取蜂蜜大佬Github的
https://github.com/FongMi/CatVodSpider/raw/main/txt/cookie.txt

Cookie获取方法
https://github.com/UndCover/PyramidStore/blob/main/list.md#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9

Cookie设置方法1: DR-PY 后台管理界面
CMS后台管理 > 设置中心 > 环境变量 > {"bili_cookie":"XXXXXXX","vmid":"XXXXXX"} > 保存

Cookie设置方法2: 手动替换Cookie
底下代码 headers的
"Cookie":"$bili_cookie"
手动替换为
"Cookie":"将获取的Cookie黏贴在这"
*/

var rule = {
    title:'我的哔哩',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/search/type?search_type=video&keyword=小姐姐4K&page=1',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'经典无损音乐合集&帕梅拉&太极拳&健身&舞蹈&音乐&歌曲&MV&演唱会&白噪音&知名UP主&说案&解说&演讲&探索发现&纪录片&平面设计教学&软件教程&实用教程&旅游&风景&食谱&美食&搞笑&球星&动物世界&相声小品&戏曲&儿童&小姐姐&荒野求生',
    class_url:'经典无损音乐合集&帕梅拉&太极拳&健身&舞蹈&音乐&歌曲&MV4K&演唱会4K&白噪音4K&知名UP主&说案&解说&演讲&探索发现超清&纪录片超清&平面设计教学&软件教程&实用教程&旅游&风景4K&食谱&美食超清&搞笑&球星&动物世界超清&相声小品&戏曲&儿童&小姐姐4K&荒野求生超清',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        经典无损音乐合集:{tid:'经典无损音乐合集'},
        帕梅拉:{tid:'帕梅拉'},
        太极拳:{tid:'太极拳'},
        健身:{tid:'健身'},
        舞蹈:{tid:'舞蹈'},
        音乐:{tid:'音乐'},
        歌曲:{tid:'歌曲'},
        MV4K:{tid:'MV4K'},
        演唱会4K:{tid:'演唱会4K'},
        白噪音4K:{tid:'白噪音4K'},
        知名UP主:{tid:'知名UP主'},
        说案:{tid:'说案'},
        解说:{tid:'解说'},
        演讲:{tid:'演讲'},
        探索发现超清:{tid:'探索发现超清'},
        纪录片超清:{tid:'纪录片超清'},
        平面设计教学:{tid:'平面设计教学'},
        软件教程:{tid:'软件教程'},
        实用教程:{tid:'实用教程'},
        旅游:{tid:'旅游'},
        风景4K:{tid:'风景4K'},
        食谱:{tid:'食谱'},
        美食超清:{tid:'美食超清'},
        搞笑:{tid:'搞笑'},
        球星:{tid:'球星'},
        动物世界超清:{tid:'动物世界超清'},
        相声小品:{tid:'相声小品'},
        戏曲:{tid:'戏曲'},
        儿童:{tid:'儿童'},
        小姐姐4K:{tid:'小姐姐4K'},
        荒野求生超清:{tid:'荒野求生超清'}
    },
    filter: {
        "经典无损音乐合集":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"},{"n":"粤语","v":"粤语歌曲超清"},{"n":"热榜","v":"2022年热们歌曲"},{"n":"经典","v":"经典老歌"},{"n":"古风","v":"古风歌曲"},{"n":"闽南","v":"闽南语歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"翻唱","v":"网红翻唱歌曲"},{"n":"音乐","v":"音乐 4k"},{"n":"阿黛尔","v":"阿黛尔演唱会超清超清"},{"n":"Blackpink","v":"blackpink演唱会超清"},{"n":"Beyond","v":"beyond演唱会超清"},{"n":"坂井泉水","v":"坂井泉水演唱会超清"},{"n":"宝丽金","v":"宝丽金演唱会超清"},{"n":"布兰妮","v":"布兰妮演唱会超清"},{"n":"陈瑞","v":"陈瑞演唱会超清"},{"n":"陈奕迅","v":"陈奕迅演唱会超清"},{"n":"崔健","v":"崔健演唱会超清"},{"n":"Coldplay","v":"coldplay演唱会超清"},{"n":"陈慧娴","v":"陈慧娴演唱会超清"},{"n":"陈百强","v":"陈百强演唱会超清"},{"n":"陈淑桦","v":"陈淑桦演唱会超清"},{"n":"陈慧琳","v":"陈慧琳演唱会超清"},{"n":"邓丽君","v":"邓丽君演唱会超清"},{"n":"邓紫棋","v":"邓紫棋演唱会超清"},{"n":"刀郎","v":"刀郎演唱会超清"},{"n":"达明一派","v":"刘以达歌曲"},{"n":"费玉清","v":"费玉清演唱会超清"},{"n":"谷村新司","v":"谷村新司演唱会超清"},{"n":"郭富城","v":"郭富城演唱会超清"},{"n":"邰正宵","v":"邰正宵演唱会超清"},{"n":"关淑怡","v":"关淑怡演唱会超清"},{"n":"黄凯芹","v":"黄凯芹演唱会超清"},{"n":"黑豹乐队","v":"H黑豹乐队"},{"n":"降央卓玛","v":"降央卓玛演唱会超清"},{"n":"江慧","v":"江慧歌曲"},{"n":"吉永小百合","v":"吉永小百合歌曲"},{"n":"金庸","v":"金庸影视歌曲"},{"n":"刘德华","v":"刘德华演唱会超清"},{"n":"Lady Gaga","v":"Lady Gaga演唱会超清"},{"n":"龙飘飘","v":"龙飘飘演唱会超清"},{"n":"罗百吉","v":"罗百吉演唱会超清"},{"n":"罗大佑","v":"罗大佑演唱会超清"},{"n":"林志炫","v":"林志炫演唱会超清"},{"n":"林忆莲","v":"林忆莲演唱会超清"},{"n":"李知恩","v":"李知恩演唱会超清"},{"n":"梁静茹","v":"梁静茹演唱会超清"},{"n":"冷漠","v":"冷漠演唱会超清"},{"n":"李克勤","v":"李克勤演唱会超清"},{"n":"林子祥","v":"林子祥演唱会超清"},{"n":"黎明","v":"黎明演唱会超清"},{"n":"刘若英","v":"刘若英演唱会超清"},{"n":"McHotdog","v":"MC Hotdog演唱会超清"},{"n":"莫文蔚","v":"莫文蔚演唱会超清"},{"n":"孟庭苇","v":"孟庭苇演唱会超清"},{"n":"麦当娜","v":"麦当娜演唱会超清"},{"n":"迈克杰克逊","v":"迈克杰克逊演唱会超清"},{"n":"雅尼紫禁城","v":"雅尼紫禁城演唱会超清"},{"n":"潘越云","v":"潘越云演唱会超清"},{"n":"潘美辰","v":"潘美辰演唱会超清"},{"n":"齐秦","v":"齐秦演唱会超清"},{"n":"祁美云","v":"祁美云演唱会超清"},{"n":"任贤齐","v":"任贤齐演唱会超清"},{"n":"苏慧伦","v":"苏慧伦演唱会超清"},{"n":"唐朝乐队","v":"唐朝乐队"},{"n":"童安格","v":"童安格演唱会超清"},{"n":"TFBOYS","v":"TFBOYS演唱会超清"},{"n":"太极乐队","v":"太极乐队演唱会超清"},{"n":"唐朝摇滚","v":"唐朝摇滚演唱会超清"},{"n":"谭咏麟","v":"谭咏麟演唱会超清"},{"n":"王琪","v":"王琪歌曲"},{"n":"伍珂玥","v":"伍珂玥演唱会超清"},{"n":"王杰","v":"王杰演唱会超清"},{"n":"伍佰","v":"伍佰演唱会超清"},{"n":"温兆伦","v":"温兆伦演唱会超清"},{"n":"王菲","v":"王菲演唱会超清"},{"n":"熊天平","v":"熊天平演唱会超清"},{"n":"徐小凤","v":"徐小凤演唱会超清"},{"n":"席琳迪翁","v":"席琳迪翁演唱会超清"},{"n":"许嵩","v":"黄许嵩演唱会超清"},{"n":"许美静","v":"许美静演唱会超清"},{"n":"许冠杰","v":"许冠杰演唱会超清"},{"n":"小虎队","v":"小虎队演唱会超清"},{"n":"许巍","v":"许巍演唱会超清"},{"n":"叶启田","v":"叶启田演唱会超清"},{"n":"叶玉卿","v":"叶玉卿演唱会超清"},{"n":"杨千嬅","v":"杨千嬅演唱会超清"},{"n":"左麟右李","v":"左麟右李演唱会超清"},{"n":"赵传","v":"赵传演唱会超清"},{"n":"周华健","v":"周华健演唱会超清"},{"n":"周启生","v":"周启生演唱会超清"},{"n":"张信哲","v":"张信哲演唱会超清"},{"n":"周慧敏","v":"周慧敏演唱会超清"},{"n":"张碧晨","v":"张碧晨演唱会超清"},{"n":"中岛美雪","v":"中岛美雪演唱会超清"},{"n":"张学友","v":"张学友演唱会超清"},{"n":"猪哥亮","v":"猪哥亮歌曲"},{"n":"周杰伦","v":"周杰伦演唱会超清"},{"n":"周深","v":"周深演唱会超清"},{"n":"张蔷","v":"张蔷演唱会超清"},{"n":"张帝","v":"张帝演唱会超清"},{"n":"张国荣","v":"张国荣演唱会超清"},{"n":"郑钧","v":"郑钧演唱会超清"},{"n":"张楚","v":"张楚演唱会超清"},{"n":"张真","v":"张真演唱会超清"},{"n":"赵传","v":"赵传演唱会超清"},{"n":"周传雄","v":"周传雄演唱会超清"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟