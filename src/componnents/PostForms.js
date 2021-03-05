import React from 'react';
import {connect} from 'react-redux'
import {createPost, showMessage} from "../redux/actions";
import {Messages} from "./Messages";

 class PostForms extends React.Component {
    constructor(porops) {
        super(porops);
        this.state={
            title:''
        };
    }
    shubmitHandler= event=>{
        event.preventDefault();
        const {title}=this.state;
        if(!title.trim()){
            return this.props.showMessage('required title');
        }
        const newPost={
            title,
            id:Date.now().toString()
        }
        console.log(newPost)
        this.props.createPost(newPost);
        this.setState({
            title:''
        })
    };
    changeInputHandler = (event)=>{
          this.setState(prev=>({...prev,...{
                  [event.target.name]:event.target.value
              }}))
    };
    render() {
        return (<form onSubmit={this.shubmitHandler}>
            {this.props.message &&    <Messages message={this.props.message }/>}
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input
                    value={this.state.title}
                    onChange={ this.changeInputHandler}
                    name={'title'}
                    type="text" className="form-control" id="title"/>
            </div>
            <button className={'btn btn-success'} type={'submit'}>Create</button>
        </form>)
    }
}
const mapDispatchToProps={
  createPost,showMessage
};
const mapStateToProps= state=>({
    message:state.app.message
});
export  default connect(mapStateToProps,mapDispatchToProps)(PostForms);
