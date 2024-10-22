const UPDATE_VOLUME = 'UPDATE_VOLUME';
const UPDATE_BUTTON_PLAY = 'UPDATE-BUTTON-PLAY';

let initialState = {
    volume : 0.5,
};



const homeReducer = (state = initialState,action) => {


    switch(action.type){
        case UPDATE_VOLUME: {
            let copyState = {...state};
            copyState.volume =  action.obj.volume.target.value;
            if(!copyState.volume) copyState.volume = 0.5;
            action.obj.video.current.volume =  +('0.' + copyState.volume);
            if(copyState.volume == 10) action.obj.video.current.volume = 1;
            return copyState;
        }
        case UPDATE_BUTTON_PLAY : {
            if(action.obj.video.current.paused) 
            {
                action.obj.buttonPlay.current.style.opacity = 0;
                action.obj.video.current.play();
                   for(let i = 0.1; i < 1; i+=0.1)
                   {
                       document.querySelector('input').style.opacity = i.toFixed(1);
                   }
            }
            else
            {
                action.obj.buttonPlay.current.style.opacity = 1;
                action.obj.video.current.pause();
                document.querySelector('input').style.opacity = 0;
            }
           
            return state;    
        }
        default: 
            return state;
    }
}

export const volumeChangeActionCreator = (obj) =>({type:UPDATE_VOLUME, obj: obj});
export const buttonPlayOnChange = (obj) => ({type:UPDATE_BUTTON_PLAY, obj: obj});
  
export default homeReducer;