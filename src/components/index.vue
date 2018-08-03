<template>
  <div id="app" v-cloak>
    <header class="site-header">
      <nav class="navbar navbar-default">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="https://www.tuoniaox.com/">
              <img alt="Brand" src="./../../static/images/logo.png">
            </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="padding-right: 0px;">
            <el-row :gutter="20">
              <el-col :span="10">
                <div class="grid-content bg-purple tuoniao-nav"></div>
                <el-menu class="el-menu-demo home" mode="horizontal">
                  <el-menu-item index="1">
                    <router-link to="/home" class="tuoniao-a">首页</router-link>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">头条</template>
                    <el-menu-item index="2-1">
                      <router-link to="/headline-view" class="tuoniao-a">观点洞察</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                      <router-link to="/headline-chain" class="tuoniao-a">链圈局势</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                      <router-link to="/headline-industy" class="tuoniao-a">行业资讯</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                      <router-link to="/headline" class="tuoniao-a">百科</router-link>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item index="3">
                    <router-link to="/flash" class="tuoniao-a">快讯</router-link>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <router-link to="market" class="tuoniao-a">行情</router-link>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <router-link to="activity" class="tuoniao-a">活动</router-link>
                  </el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="2" :push="6" class="tuoniao-nav-p6">
                <div class="tuoniao-nav-pl" role="search"
                     style="max-width: 500px;float: right;width: 320px;margin-top: 20px;">
                  <div class="form-group">
                    <i class="el-icon-edit-outline" style="height: 15px;margin-top: 0px;">投稿</i>
                    <div class="tuoniao-contributor">
                      <span class="tuoniao-hr-contributor"></span>
                      <p class="tuoniao-lx">投稿请联系:</p>
                      <span class="tuoniao-email">testQQ.COM</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :push="6" class="tuoniao-search">
                <div class="" role="search" style="max-width: 500px;float: right;width: 320px;margin-top: 20px;">
                  <div class="form-group">
                    <i class="el-icon-edit-outline" style="height: 15px;margin-top: 0px;"><input placeholder="搜索"
                                                                                                 class="tuoniao-search-input"
                                                                                                 type="text"/></i>
                    <img src="images/c.png" class="tuoniao-search-img" alt="">
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :push="6" :pull="3" class="tuoniao-nav-p6 tuoniao-p6-search">
                <div class="" role="search" style="max-width: 500px;float: right;width: 320px;margin-top: 20px;">
                  <div class="form-group">
                    <span><i class="el-icon-search" id="tuoniao-search">搜索</i></span>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :push="4" style="margin-left: 80px;left: 17.66667%;">
                <div class="" role="search" style="max-width: 500px;float: right;width: 320px;margin-top: 20px;">
                  <div class="form-group">
                    <i class="el-icon-mobile-phone">APP</i>
                    <div class="tuoniao-app">
                      <span class="tuoniao-border-up"></span>
                      <span class="tuoniao-app-erweima"><img src="./../../static/images/u231.png"></span>
                      <span class="tuoniao-app-s">扫描二维码</span>
                      <span class="tuoniao-app-s">下载鸵鸟区APP</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="2" :push="3" style="left: 13.5%;">
                <div class="" role="search" style="max-width: 500px;float: right;width: 320px;margin-top: 15px;">
                  <div class="form-group">
                    <span class="tuoniao-nav-login">
                      <a>登录</a><a>/</a><a>注册</a>
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <!-- <ul class="nav navbar-nav navbar-margin-left" style="margin-top: 10px;">
  <li id="menu-item-1711" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1711"><a href="https://www.tuoniaox.com/">区块链头条</a></li>
<li id="menu-item-15" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"><a href="https://www.tuoniaox.com/wiki">区块链百科</a></li>
<li id="menu-item-13" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"><a href="https://www.tuoniaox.com/about">关于我们</a></li>
</ul> -->
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
      </nav>
    </header>
    <div>
      <section class="news">
        <div class="container">
          <div class="content-left left">
            <!--幻灯片-->
            <div id="carousel-example-generic" class="carousel slide marginb-30 margint-20" data-ride="carousel">
              <!-- Indicators -->
              <!-- <ol class="carousel-indicators">
           <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
           <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
           <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
           <li data-target="#carousel-example-generic" data-slide-to="3" class=""></li>
           <li data-target="#carousel-example-generic" data-slide-to="4" class=""></li>
           <li data-target="#carousel-example-generic" data-slide-to="5" class=""></li>
         </ol> -->
              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <a target="_blank" href="https://www.tuoniaox.com/43620.html"><img
                          src="./../../static/images/2018071910532321-e1531968808772.jpg"
                          alt="美国众议院听证会：加密货币超越了硬资产并影响了快速资产分类" class="slide_img"></a>
                  <div class="carousel-caption">美国众议院听证会：加密货币超越了硬资产并影响了快速资产分类 </div>
                </div>
                <div class="item">
                  <a target="_blank" href="https://www.tuoniaox.com/43651.html"><img
                          src="./../../static/images/2018071914104916.jpeg" alt="经各成员国投票决定，中国将领导国际物联网区块链标准化研究小组"
                          class="slide_img"></a>
                  <div class="carousel-caption">经各成员国投票决定，中国将领导国际物联网区块链标准化研究小组 </div>
                </div>
                <div class="item">
                  <a target="_blank" href="https://www.tuoniaox.com/43178.html"><img
                          src="./../../static/images/2018071710530415.jpeg" alt="美国CFTC发布加密货币咨询公告，提醒潜在买家在投资前做好功课"
                          class="slide_img"></a>
                  <div class="carousel-caption">美国CFTC发布加密货币咨询公告，提醒潜在买家在投资前做好功课 </div>
                </div>
                <div class="item">
                  <a target="_blank" href="https://www.tuoniaox.com/42464.html"><img
                          src="./../../static/images/2018071213140446.jpg" alt="中国人民银行副行长潘功胜：将严厉打击“出海”ICOs"
                          class="slide_img"></a>
                  <div class="carousel-caption">中国人民银行副行长潘功胜：将严厉打击“出海”ICOs </div>
                </div>
                <div class="item">
                  <a target="_blank" href="https://www.tuoniaox.com/42024.html"><img
                          src="./../../static/images/2018071011202231.jpeg"
                          alt="数字货币运行监管课题组首席货币学专家：数字货币可结合信息化时代的数据实时获取能力实现币值的精准定值" class="slide_img"></a>
                  <div class="carousel-caption">数字货币运行监管课题组首席货币学专家：数字货币可结合信息化时代的数据实时获取能力实现币值的精准定值 </div>
                </div>
                <div class="item">
                  <a target="_blank" href="https://www.tuoniaox.com/7540.html"><img src="./../../static/images/3-10.jpg"
                                                                                    alt="关于防范境外ICO与“虚拟货币”交易风险的提示"
                                                                                    class="slide_img"></a>
                  <div class="carousel-caption">关于防范境外ICO与“虚拟货币”交易风险的提示 </div>
                </div>
              </div>
              <!-- Controls -->
              <a class="left carousel-control" href="https://www.tuoniaox.com/#carousel-example-generic" role="button"
                 data-slide="prev">
                <span class="control-left"><i class="el-icon-arrow-left" style="color: #FFF;"></i></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="https://www.tuoniaox.com/#carousel-example-generic" role="button"
                 data-slide="next">
                <span class="control-right" style="height: 30px;"><i class="el-icon-arrow-right"
                                                                     style="color: #FFF;"></i></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="topic marginb-30">
              <ul class="radius left tuoniao-home-ad">
                <a href="https://www.tuoniaox.com/43466.html" target="_blank" title="星途协议CTO李成：从谷歌到星途，定义区块链广告技术">
                  <img src="./../../static/images/201807181418317.png" class="radius_img" border="0"
                       alt="星途协议CTO李成：从谷歌到星途，定义区块链广告技术">
                </a>
              </ul>
              <ul class="radius left tuoniao-home-ad">
                <a href="https://www.tuoniaox.com/43504.html" target="_blank" title="BTC今晨大涨10%背后有玄机？芝交所交割到期、ETF即将进场">
                  <img src="./../../static/images/2018071817315170.jpg" class="radius_img" border="0"
                       alt="BTC今晨大涨10%背后有玄机？芝交所交割到期、ETF即将进场">
                </a>
              </ul>
              <ul class="radius left tuoniao-home-ad">
                <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                   title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                  <img src="./../../static/images/2018071811084089.jpeg" class="radius_img" border="0"
                       alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                </a>
              </ul>
            </div>
            <!-- 左侧list-->
            <div class="news-list-content marginb-30">
              <!-- <div class="tit font16">
               <ul class="fontw dami-home-tab" id="menu1">
               <li class="tab-menu index-tab current" data-query="home"><span></span>最近更新</li>
               <li class="tab-menu index-tab" data-page="home" data-query="898"><span></span>最近更新</li><li class="tab-menu index-tab" data-page="home" data-query="91"><span></span>行业资讯</li><li class="tab-menu index-tab" data-page="home" data-query="607"><span></span>链圈局势</li><li class="tab-menu index-tab current" data-page="home" data-query="89"><span></span>观点洞察</li><li class="tab-menu index-tab" data-page="home" data-query="88"><span></span>活动推荐</li>                 </ul>
             </div> -->
              <el-menu class="el-menu-demo tuoniao-ul" style="margin: 10;" mode="horizontal">
                <el-menu-item index="1">推荐</el-menu-item>
                <el-menu-item index="12">指点观察</el-menu-item>
                <el-menu-item index="13">
                  <a href="https://www.ele.me" target="_blank">链圈局势</a>
                </el-menu-item>
                <el-menu-item index="14">行业资讯</el-menu-item>
                <el-menu-item index="15">百科</el-menu-item>
              </el-menu>
              <div class="news-list-left">
                <!-- 置顶新闻 -->
                <ul class="" style="padding-left: 0px;">
                </ul>
                <!-- 正常新闻 -->
                <ul class="news-list" style="padding-left: 0px;">
                  <li class="list-content" style="border-top: 0px">
                    <div class="media">
                      <!--   <div class="media-left">
                   <a href="https://www.tuoniaox.com/43710.html" class="news-list-img">
                   <input type="hidden" value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917291946.jpeg">
                   <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                   <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                 </a>
                 &nbsp;</div> -->
                      <div class="media-left">
                        <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                          <input type="hidden"
                                 value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                          <img class="media-object" src="./../../static/images/2018071917143365.jpg"
                               alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                        </a>
                        &nbsp;
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>
                        </h4>
                        <el-button type="primary" round>独家</el-button>
                        <!-- <el-button type="primary" round>置项</el-button> -->
                        <p class="media-introduce">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前，突破7000美元的里程碑直逼7500美元，等到清晨，国内币圈一片喜悦，赚钱的、回本儿的，同时也有疑惑的：这是 …
                          </a>
                        </p>
                        <ul class="footnotes">
                          <li class="left">
                            <img style="border-radius: 50%;margin-top: -10px;" src="./../../static/images/tx.jpg">
                          </li>
                          <li class="left tuoniao-bookmark">
                            鸵鸟区块链的朋友们
                          </li>
                          <li class="left">20小时前</li>
                          <li class="left">
                            <img style="width: 15px;height: 15px;" src="./../../static/images/bookmark.png">
                            <a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>
                            <a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>
                            <a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>
                          </li>
                          <li class="right">
                            <img style="margin: -6px 10px 0 0;" src="./../../static/images/eye.png">
                            <a href="javascript:;" style="margin-top: -2px;" data-id="43710" data-src=""
                               class="generate-share-image right">dddddd分享</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="list-content" style="border-top: 0px">
                    <div class="media">
                      <!--   <div class="media-left">
                   <a href="https://www.tuoniaox.com/43710.html" class="news-list-img">
                   <input type="hidden" value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917291946.jpeg">
                   <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                   <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                 </a>
                 &nbsp;</div> -->
                      <div class="media-left">
                        <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                          <input type="hidden"
                                 value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                          <img class="media-object" src="./../../static/images/2018071917143365.jpg"
                               alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                        </a>
                        &nbsp;
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>
                        </h4>
                        <el-button type="primary" round>独家</el-button>
                        <!-- <el-button type="primary" round>置项</el-button> -->
                        <p class="media-introduce">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前，突破7000美元的里程碑直逼7500美元，等到清晨，国内币圈一片喜悦，赚钱的、回本儿的，同时也有疑惑的：这是 …
                          </a>
                        </p>
                        <ul class="footnotes">
                          <li class="left">
                            <img style="border-radius: 50%;margin-top: -10px;" src="./../../static/images/tx.jpg">
                          </li>
                          <li class="left tuoniao-bookmark">
                            鸵鸟区块链的朋友们
                          </li>
                          <li class="left">20小时前</li>
                          <li class="left">
                            <img style="width: 15px;height: 15px;" src="./../../static/images/bookmark.png">
                            <a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>
                            <a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>
                            <a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>
                          </li>
                          <li class="right">
                            <img style="margin: -6px 10px 0 0;" src="./../../static/images/eye.png">
                            <a href="javascript:;" style="margin-top: -2px;" data-id="43710" data-src=""
                               class="generate-share-image right">dddddd分享</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="list-content">
                    <div class="media">
                      <!--   <div class="media-left">
                         <a href="https://www.tuoniaox.com/43710.html" class="news-list-img">
                         <input type="hidden" value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917291946.jpeg">
                         <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                         <img class="media-object" src="./../../static/images/2018071917291946.jpeg" alt="好消息频出！这是利好被提前释放还是牛市苗头的初现？">
                       </a>
                       &nbsp;</div> -->
                      <div class="media-left">
                        <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                          <input type="hidden"
                                 value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                          <img class="media-object" src="./../../static/images/2018071917143365.jpg"
                               alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                        </a>
                        &nbsp;
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>
                        </h4>
                        <el-button type="primary" round>独家</el-button>
                        <!-- <el-button type="primary" round>置项</el-button> -->
                        <p class="media-introduce">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前，突破7000美元的里程碑直逼7500美元，等到清晨，国内币圈一片喜悦，赚钱的、回本儿的，同时也有疑惑的：这是 …
                          </a>
                        </p>
                        <ul class="footnotes">
                          <li class="left">
                            <img style="border-radius: 50%;margin-top: -10px;" src="./../../static/images/tx.jpg">
                          </li>
                          <li class="left tuoniao-bookmark">
                            鸵鸟区块链的朋友们
                          </li>
                          <li class="left">20小时前</li>
                          <li class="left">
                            <img style="width: 15px;height: 15px;" src="./../../static/images/bookmark.png">
                            <a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>
                            <a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>
                            <a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>
                          </li>
                          <li class="right">
                            <img style="margin: -6px 10px 0 0;" src="./../../static/images/eye.png">
                            <a href="javascript:;" style="margin-top: -2px;" data-id="43710" data-src=""
                               class="generate-share-image right">dddddd分享</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="list-content">
                    <div class="media">
                      <div class="media-left">
                        <a href="https://www.tuoniaox.com/43699.html" class="news-list-img">
                          <input type="hidden"
                                 value="https://www.tuoniaox.com/wp-content/uploads/2018/07/2018071917143365.jpg">
                          <img class="media-object" src="./../../static/images/2018071917143365.jpg"
                               alt="中国人民银行数字货币研究所 孙浩 钱友才：经济学视角理解分布式账本技术">
                        </a>
                        &nbsp;
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">好消息频出！这是利好被提前释放还是牛市苗头的初现</a>
                        </h4>
                        <el-button type="primary" round>独家</el-button>
                        <!-- <el-button type="primary" round>置项</el-button> -->
                        <p class="media-introduce">
                          <a href="https://www.tuoniaox.com/43710.html" target="_blank">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前，突破7000美元的里程碑直逼7500美元，等到清晨，国内币圈一片喜悦，赚钱的、回本儿的，同时也有疑惑的：这是 …
                          </a>
                        </p>
                        <ul class="footnotes">
                          <li class="left">
                            <img style="border-radius: 50%;margin-top: -10px;" src="./../../static/images/tx.jpg">
                          </li>
                          <li class="left tuoniao-bookmark">
                            鸵鸟区块链的朋友们
                          </li>
                          <li class="left">20小时前</li>
                          <li class="left">
                            <img style="width: 15px;height: 15px;" src="./../../static/images/bookmark.png">
                            <a href="https://www.tuoniaox.com/tag/coinbase" rel="tag">Coinbase</a>
                            <a href="https://www.tuoniaox.com/tag/g20" rel="tag">G20</a>
                            <a href="https://www.tuoniaox.com/tag/mei-zheng-jian-hui" rel="tag">美证监会</a>
                          </li>
                          <li class="right">
                            <img style="margin: -6px 10px 0 0;" src="./../../static/images/eye.png">
                            <a href="javascript:;" style="margin-top: -2px;" data-id="43710" data-src=""
                               class="generate-share-image right">dddddd分享</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="more center line36 marginb-30" data-is-loading="1">
                  <span style="border: 1px solid #409EFF;border-radius: 4px;display: inline-block;width: 180px;top: 67px;position: relative;">
                    <a href="#" style="color: #409EFF;display: contents;">加载更多</a>
                  </span>
                  <!-- <a href="javascript:;" data-query="home" data-action="ajax_load" data-page="home" data-paged="2" data-container="news-list" class="ajax-load" title="点击加载更多">加载更多</a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="right content-right">
            <div class="news-flash-right right marginb">
              <!-- <div class="ranking marginb-30 margint-20">
                                 <div class="ad-box">
                                 <a href="https://www.tuoniaox.com/app_info" target="_blank">
                                 <img src="./../../static/images/20180113143552.jpg" alt="APP下载">
                               </a>
                               <span>广告</span>
                             </div>
                           </div> -->
              <div class="ranking marginb-30 margint-20">
                <div class="tit">
                  <span style="border-radius: 25%;background: #4169E1;height: 20px;width: 20px;margin-left: 15px;"><img
                          style="margin-top: -3px;margin-left: 2px;" src="./../../static/images/lightning.png"></span>
                  <span>今日快讯</span>
                </div>
                <div class="con bgc line22 clearfix news-flash">
                  <ul>
                    <li>
                      <p class="media-introduce" style="max-height: 110px;">
                        爱思社群完成品牌域名aisi.org的收购冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全
                      </p>
                      <p style="color: #000">
                        【日本静冈银行或将与Coincheck合作】 鸵鸟区块链7月20日消息，日本静冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全性并提高社会信任度，将与该交易所进行帐户合作等业务（产经新闻）
                      </p>
                      <span class="left">10分钟前</span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/down.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/up.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/share.png">分享
                                 </span>
                    </li>
                    <li>
                      <p class="media-introduce" style="max-height: 110px;">
                        爱思社群完成品牌域名aisi.org的收购冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全
                      </p>
                      <p style="color: #000">
                        【日本静冈银行或将与Coincheck合作】 鸵鸟区块链7月20日消息，日本静冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全性并提高社会信任度，将与该交易所进行帐户合作等业务（产经新闻）
                      </p>
                      <!-- <ul> -->
                      <span class="left">10分钟前</span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/down.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/up.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/share.png">分享
                                 </span>
                      <!-- </ul> -->
                    </li>
                    <li>
                      <p class="media-introduce" style="max-height: 110px;">
                        爱思社群完成品牌域名aisi.org的收购冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全
                      </p>
                      <p style="color: #000">
                        【日本静冈银行或将与Coincheck合作】 鸵鸟区块链7月20日消息，日本静冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全性并提高社会信任度，将与该交易所进行帐户合作等业务（产经新闻）
                      </p>
                      <!-- <ul> -->
                      <span class="left">10分钟前</span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/down.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/up.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/share.png">分享
                                 </span>
                      <!-- </ul> -->
                    </li>
                    <li>
                      <p class="media-introduce" style="max-height: 110px;">
                        爱思社群完成品牌域名aisi.org的收购冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全
                      </p>
                      <p style="color: #000">
                        【日本静冈银行或将与Coincheck合作】 鸵鸟区块链7月20日消息，日本静冈银行行长柴田久在接受彭博社采访时表示，如果Monex Group 收购的加密货币交易所Coincheck能够保证安全性并提高社会信任度，将与该交易所进行帐户合作等业务（产经新闻）
                      </p>
                      <!-- <ul> -->
                      <span class="left">10分钟前</span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/down.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/up.png">369
                                 </span>
                      <span class="left tuoniao-share">
                                   <img style="margin: -6px 10px 0 0;" src="./../../static/images/share.png">分享
                                 </span>
                      <!-- </ul> -->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="content-right right marginb nosee">
              <div class="ranking marginb-30 margint-20">
                <div class="tit">
                  <span style="border-radius: 25%; background: #FFB90F; height: 20px; width: 20px; margin-left: 15px; text-align: center;"><img
                          style="margin-top: -3px; margin-left: 2px;" src="./../../static/images/enterprise.png"></span>
                  <span>企业专栏</span>
                </div>
                <div class="con bgc line22 clearfix">
                  <ul class="clearfix tuoniao-enterprise" style="padding-top: 11px;">
                    <li class="left">
                      <img style="border-radius: 50%;" src="./../../static/images/test.png" alt="test">
                    </li>
                    <li class="left">
                      One Ganme 万世
                    </li>
                    <li class="left">
                      153万浏览量
                    </li>
                    <li class="right0" style="width: 207px;max-height: 100%;margin: 15px 0 0 77px;">
                      <br>
                      <a style="min-height: 45px;height: 20px;display: -webkit-box !important;text-overflow: ellipsis;overflow: hidden;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
                         href="#">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前</a>
                    </li>
                  </ul>
                  <ul class="clearfix tuoniao-enterprise" style="padding-top: 11px;">
                    <li class="left">
                      <img style="border-radius: 50%;" src="./../../static/images/test.png" alt="test">
                    </li>
                    <li class="left">
                      One Ganme 万世
                    </li>
                    <li class="left">
                      153万浏览量
                    </li>
                    <li class="right0" style="width: 207px;max-height: 100%;margin: 15px 0 0 77px;">
                      <br>
                      <a style="min-height: 45px;height: 20px;display: -webkit-box !important;text-overflow: ellipsis;overflow: hidden;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"
                         href="#">来源：公众号 吴解区块链（ID：bitewu666） 作者：比特吴团队 马莎卡 今天凌晨一点，比特币突然猛涨，一根大阳线将币价直接拉升到一个月以前</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="hotnews marginb-30">
                <div class="tit">
                  <span style="border-radius: 25%; background: #CD3333; height: 20px; width: 20px; margin-left: 15px;"><img
                          style="margin-top: -3px; margin-left: 2px;" src="./../../static/images/hot.png"></span>
                  <span>热门新闻</span>
                </div>
                <div class="con bgc paddingclearfix">
                  <div class="con bgc  clearfix">
                    <ul class="clearfix tuoniao-hot-news">
                      <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                         title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                        <img class="left" src="./../../static/images/2018071811084089.jpeg"
                             alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                      </a>
                      <ol class="right">
                        <li>
                          <span class="tuoniao-hot-content">
                            <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                               title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                          </span>
                        </li>
                        <li class="font12 gray8">2018-07-18</li>
                        <li class="right">
                          <img style="height: 20px;width: 15px;margin-left: 100px;" src="./../../static/images/eye.png">
                          <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src=""
                             class="generate-share-image right">3098</a>
                        </li>
                      </ol>
                    </ul>
                    <ul class="clearfix tuoniao-hot-news">
                      <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                         title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                        <img class="left" src="./../../static/images/2018071811084089.jpeg"
                             alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                      </a>
                      <ol class="right">
                        <li>
                          <span class="tuoniao-hot-content">
                            <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                               title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                          </span>
                        </li>
                        <li class="font12 gray8">2018-07-18</li>
                        <li class="right">
                          <img style="height: 20px;width: 15px;margin-left: 100px;" src="./../../static/images/eye.png">
                          <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src=""
                             class="generate-share-image right">3098</a>
                        </li>
                      </ol>
                    </ul>
                    <ul class="clearfix tuoniao-hot-news">
                      <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                         title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                        <img class="left" src="./../../static/images/2018071811084089.jpeg"
                             alt="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">
                      </a>
                      <ol class="right">
                        <li>
                          <span class="tuoniao-hot-content">
                            <a href="https://www.tuoniaox.com/43416.html" target="_blank"
                               title="加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来">加拿大Rivemont加密货币基金：目前加密货币市场并非牛市，但非常看好比特币的未来</a>
                          </span>
                        </li>
                        <li class="font12 gray8">2018-07-18</li>
                        <li class="right">
                          <img style="height: 20px;width: 15px;margin-left: 100px;" src="./../../static/images/eye.png">
                          <a href="javascript:;" style="margin-left: 12px;" data-id="43710" data-src=""
                             class="generate-share-image right">3098</a>
                        </li>
                      </ol>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="friendlinks marginb-20">
      <div style="width: 100%;background: #708090;">
        <div class="container top">
          <!-- <a href="">关于我们</a> -->
          <!-- <a href="">投稿须知</a> -->
          <!-- <a href="">免责声明</a> -->
          <!-- <a href="">联系我们</a> -->
          <el-row style="left: -35px;">
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">关于我们</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">投稿须知</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">免责声明</a>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <a href="">联系我们</a>
              </div>
            </el-col>
            <el-col :span="2" :push="14">
              <div class="grid-content bg-purple-dark" stlye="text-align: center;">
                <span style="border-radius: 50%;width: 35px;height: 35px;background: #515151;margin-top: -30px;">
                  <img style="margin: 10px 0 0 -5px;" src="./../../static/images/wechat.png">
                </span>
              </div>
            </el-col>
            <span style="border-radius: 50%;width: 35px;height: 35px;background: #515151;margin: -30px 0 0 345px;">
            <img style="margin: 10px 0 0 -5px;" src="./../../static/images/iphone.png">
        </span>
          </el-row>
        </div>
      </div>
      <div class="container" style="text-align: center;">
        <div class="content">
          <span>友情链接:</span>
          <div class="tuoniao-content">
            <a href="http://tuoniao.fm/">鸵鸟创投媒体</a>
            <a href="http://hellocapital.net/">哈鲁资本</a>
            <a href="http://lbank.info/">LBANK</a>
            <a href="https://www.aicoin.net.cn/">AICoin</a>
            <a href="http://yuanben.io/">原本</a>
            <a href="http://www.btc798.com/">比特币之家</a>
            <a href="https://www.tuoluocaijing.cn/">陀螺财经</a>
            <a href="http://www.ihuoqiu.com/">火球财经</a>
            <a href="http://www.btc789.com/">比特之窗</a>
            <a href="http://www.lianwencj.com/">链金财经</a>
            <a href="https://www.hecaijing.com/">核财经</a>
            <a href="https://www.7234.cn/">链世界</a>
            <a href="http://www.block123.com/">区块链导航</a>
            <a href="http://tokenairdrop.org/">币空投</a>
            <a href="http://www.8btm.com/">币猫商城</a>
            <a href="http://www.cesasia.cn/">CES ASIA</a>
            <a href="http://blockchain.haiwainet.cn/">人民日报海外网区块链频道</a>
          </div>
        </div>
        <div style="width: 1250px;height: 1px;background: #999;position: relative;margin-top: 84px;left: -7px;">
        </div>
        <div class="copyright" style="text-align: center;margin-top: 20px;margin: 20px 0 0 -7px;">
          <div style="position: absolute;">
            <p>Copyright © 2018 上海以北科技有限公司 沪ICP备15014516号-3</p>
          </div>
        </div>
      </div>
    </section>
    <a href="javascript:;" class="to_top"
       style="cursor: pointer; position: fixed; right: 38px; bottom: 38px; display: none;">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- <div class="cross">×</div> -->
    <div class="app_foot" style="display: none;">
      <div class="foot_app_logo">
        <img src="./../../static/images/app_logo.jpg">
        <div class="app_text">全球领先的区块链行业资讯媒体平台</div>
        <a class="app_url" href="http://android.myapp.com/myapp/detail.htm?apkName=com.ilexnet.tnfm&amp;ADTAG=mobile">立即下载</a>
        <span class="cross">×</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        textarea3: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #aa::-webkit-input-placeholder {
    color: white;
  }
  
  #aa:-moz-placeholder {
    /* Firefox 18- */
    color: white;
  }
  
  #aa::-moz-placeholder {
    /* Firefox 19+ */
    color: white;
  }
  
  #aa:-ms-input-placeholder {
    color: white;
  }
  
  .tuoniao-ul {
    margin: 200px 0px 0px 0px;
  }
  
  .home {
    margin-left: 45px;
  }
</style>
