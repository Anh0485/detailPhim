import React, { Component } from 'react';

export default class Button extends Component {
  constructor(){
    super();
    this.state={
      showMe1: false,
      showMe2: false,
    }
  }
  operation1(){
    this.setState({
      showMe1: !this.state.showMe1
    })
  }
  operation2(){
    this.setState({
      showMe2 : !this.state.showMe2
    })
  }
    render() {
      
        return (
           <div class="container-fluid">
             <button class="btn btn-danger active" onClick={()=>this.operation2()}>Chi Tiết </button>
             <button class="btn btn-primary" onClick={()=> this.operation1()}>
               Trailer
             </button>
             {
               this.state.showMe1?
               <div class="trailer" id="content">
              <iframe width="853" height="480" src="https://www.youtube.com/embed/vOUVVDWdXbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
               :null
              } 
              {
                this.state.showMe2?
                <div class="content">
                  <p>Ray Garrison là một sĩ quan cấp cao đã hy sinh trong một trận chiến. Thế nhưng, anh được tái sinh bằng công nghệ cao, giúp Ray sở hữu sức mạnh siêu nhiên và khả năng phục hồi nhanh chóng. Vận dụng những kỹ năng mới, anh săn lùng gã đàn ông đã giết vợ mình. Thế nhưng, khi sự thật dần hé mở, Ray nhận ra rằng không phải mọi thứ đều đáng tin. Ngay cả chính bản thân anh.</p>
                </div>
                :null
              }
            
           
          
            </div>
            
        )
    }
}
