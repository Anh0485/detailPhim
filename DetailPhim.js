import React, { Component } from 'react'
import Header from '../Header/Header';
import Bloodshot from '../../asset/img/phim/bloodshot_cgv_2.jpg';
import bahoangnoidoi from '../../asset/img/phim/ba-hoang-noi-doi-honest-candidate-c16-15889137267814_215x318.png';
import star from '../../asset/img/icon/star1.png';
import star12 from '../../asset/img/icon/star1.2.png';
import playvideo from '../../asset/img/icon/play-video.png';
import Button from './Button';
import '../../sass/Layout/DetailPhim/_DetailPhim.scss';
import avatar from '../../asset/img/icon/avatar.png';
import listStar from '../../asset/img/icon/listStar.png';
export default class DetailPhim extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <div class="backgroundMain " id="detailMainTop">
                    <div class="styleBlur"></div>
                    <div class="styleGradient"></div>
                    <div class="detailMainInfo mainMaxWidth2 container">
                        <div class="row">

                            <div class="col-sm-3 filmPosterTop">
                                <div class="row posterMain" >
                                    <button class="playTrailerDetail showHover">
                                        <img scr="../../asset/img/icon/play-video.png"></img>
                                    </button>
                                </div>
                            </div>
                            <div class="col-sm-5 infoMain">
                                <div>
                                    <span class="detailMainInfo1">15.05.2020</span>
                                    <br />
                                </div>
                                <div class="parentInfo2">
                                    <span class="detailMainInfo2">
                                        <span class="ageType">
                                            C16
                                </span>
                                        <span>Bloodshot</span>
                                    </span>
                                </div>
                                <div>
                                    <span class="detailMainInfo1">110 phút - 0IMDb - 2D/digital</span>
                                    <br />
                                </div>
                                <button class="btnBuyTicketDetail">Mua vé</button>
                            </div>
                            <div class="col-sm-2 circleStar">
                                <div class="circleSum"></div>
                                <div id="circlePercent" class="c100 p67">
                                    <div class="circleBoder"></div>
                                    <span>6.7</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>

                                <div id="starMain" class="row star">
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star}></img>
                                    <img src={star12}></img>
                                </div>
                                <div class="row">
                                    <span class="detailMainInfo1">95 người đánh giá</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mainMaxWidth2 contentMain">
                        <div class="detailMainInfoMobile mainMaxWidth2">
                            <div class="row">
                                ...
                        </div>
                            <ul class="nav nav-tabs navCenter">
                                <li>
                                    <a data-toggle="tab" data-target="#showingSession" aria-expanded="false"> Lịch Chiếu</a>
                                </li>
                                <li>
                                    <a data-toggle="tab" data-target="#showingInfo" aria-expanded="true">Thông Tin</a>
                                </li>
                                <li>
                                    <a data-toggle="tab" class="commentTab" data-target="#showingReviewer" aria-expanded="false">
                                        Đánh giá
                            </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="showingInfo" class="tab-pane fade active in" >
                                    <div id="homeNewsMain">
                                        <div class="row isFlex detailMainStyle">
                                            <div class="col-sm-6 col-xs-12 film left">
                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Ngày công chiếu</p>
                                                    <p class="contentInfo ">13.03.2020</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Đạo diễn</p>
                                                    <p class="contentInfo "> Dave Wilson </p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Diễn viên</p>
                                                    <p class="contentInfo ">Toby Kebbell, Eiza González, Vin Diesel</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Thể Loại</p>
                                                    <p class="contentInfo ">hành động</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Định dạng</p>
                                                    <p class="contentInfo ">2D/Digital</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Quốc Gia SX</p>
                                                    <p class="contentInfo ">Mỹ</p>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-xs-12 film right">
                                                <div class="row rowLeftInfo">
                                                    <p class="contentTitle">Nội dung</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentInfoFull description ng-binding">Dựa trên bộ truyện tranh bán chạy nhất,
                                                    nam diễn viên Vin Diesel đảm nhận vai Ray Garrison, một người lính không may bị giết trong lúc ra trận và
                                                    trở lại với vai trò là siêu anh hùng Bloodshot của tập đoàn RST. Với một đội quân công nghệ
                                                    nano trong huyết quản, anh ta là một lực lượng không thể ngăn cản, mạnh mẽ hơn
                                                    bao giờ hết và có thể chữa lành ngay lập tức. Nhưng trong việc kiểm soát cơ thể của mình,
                                                    công ty cũng đã thay đổi cả tâm trí và ký ức của anh ấy.</p>
                                                </div>

                                                <div class="row rowLeftInfo">
                                                    <p class="contentInfoFull"></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="showingReviewer" class="tab-pane fade active in">
                                    <div id="detailReviewer">
                                        <div class="row isFlex detailMainStyle">
                                            < div class="col-sm-12 col-xs-12 dadInputReviewer 
                                            newDesign">
                                                <span class="imgReviewer">
                                                    <img src={avatar} class="" />
                                                </span>

                                                <input class="inputReviwer" type="text" placeholder="Bạn nghĩ gì về phim này?" readonly="readonly" />
                                                <span class="imgReviewerStar">
                                                    <img src={listStar} />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="showingSession" class="tab-pane fade in active" >
                                    {/* <div class="row"> */}
                                    <div class="col-xs-12 block mainMaxWidth2" id="detailCinemaComplex">
                                        <ul class="nav listPCinemas">
                                            <li class=" active">
                                                <div class="tabcinema" >
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ">CGV</div>

                                                        <div class="pcinema-promotion"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-3"></div>
                                                </div>
                                            </li>

                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ">BHD Star Cineplex</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-4"></div>
                                                </div>
                                            </li>

                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">Galaxy Cinema</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-2"></div>
                                                </div>
                                            </li>

                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">CineStar</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-16"></div>
                                                </div>
                                            </li>

                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">DDC - Đống Đa</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-6"></div>
                                                </div>
                                            </li>


                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">Mega GS</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-17"></div>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2019/10/9ff07a03371c4a09260309faa32caa55.jpg" 
                                                    src="https://s3img.vcdn.vn/123phim/2019/10/9ff07a03371c4a09260309faa32caa55.jpg" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">DCINE Cinemas</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-25"></div>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="tabcinema" >
                                                    <img ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" 
                                                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" />
                                                    <div class="wrap-pcinema">
                                                        <div class="pcinema-name ng-binding">Lotte Cinema</div>

                                                        <div class="pcinema-promotion ng-binding"></div>
                                                    </div>
                                                    <div class="promo-tooltip js-promo-tooltip-1"></div>
                                                </div>
                                            </li>

                                        </ul>
                                    {/* code thứ ngày */}
                                        <div id="listDayOfWeek" class="blockSection">
                                            <div class="row wrapMovie DayOfWeek">
                                                <div class="wrapDayOfWeek">
                                                    <div class="selectDate active" data-day="22" 
                                                    data-date="20200522">
                                                        <div>
                                                            <p class="day">Thứ 6</p>
                                                            <p class="date">22</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="23" 
                                                    data-date="20200523">
                                                        <div>
                                                            <p class="day">Thứ 7</p>
                                                            <p class="date">23</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="24" 
                                                    data-date="20200524">
                                                        <div>
                                                            <p class="day">Chủ Nhật</p>
                                                            <p class="date">24</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="25" 
                                                    data-date="20200525">
                                                        <div>
                                                            <p class="day">Thứ 2</p>
                                                            <p class="date">25</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="26" 
                                                    data-date="20200526">
                                                        <div>
                                                            <p class="day">Thứ 3</p>
                                                            <p class="date">26</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="27" 
                                                    data-date="20200527">
                                                        <div>
                                                            <p class="day">Thứ 4</p>
                                                            <p class="date">27</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="28" 
                                                    data-date="20200528">
                                                        <div>
                                                            <p class="day">Thứ 5</p>
                                                            <p class="date">28</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="29" 
                                                    data-date="20200529">
                                                        <div>
                                                            <p class="day">Thứ 6</p>
                                                            <p class="date">29</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="30" 
                                                    data-date="20200530">
                                                        <div>
                                                            <p class="day">Thứ 7</p>
                                                            <p class="date">30</p>
                                                        </div>
                                                    </div>
                                                    <div class="selectDate active" data-day="31" 
                                                    data-date="20200531">
                                                        <div>
                                                            <p class="day">Chủ Nhật</p>
                                                            <p class="date">31</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
