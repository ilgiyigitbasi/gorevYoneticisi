import React, {Component} from 'react';
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import {MdClose} from "react-icons/md";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                adi: '',
                aciklama: '',
                date: '',
            }
        }
    };


    onClose = () => {
        this.props.onClose();
    };

    handleChange = (evt) => {
        let val = evt.target.value;
        this.setState({
            data: {
                ...this.state.data,
                adi: val,
            }
        });
    };
    handleChange2 = (evt) => {
        let val = evt.target.value;
        this.setState({
            data: {
                ...this.state.data,
                aciklama: val,
            }
        });
    };
    handleDateChange = (evt) => {
        let val = evt.target.value;
        this.setState({
            data: {
                ...this.state.data,
                date: val,
            }
        });
        console.log(this.state.data.date)
    };
    sendData = () => {
        this.props.sendDatas(this.state.data);
    };

    render() {
        return (
            <div className="addForm">
                <Modal open={this.props.open}
                       className="addFormModal"
                       BackdropComponent={Backdrop}
                       BackdropProps={{
                           timeout: 500,
                       }}
                >
                    <Fade in={this.props.open}>
                        <Paper elevation={1}>
                            <div className='formHeader'><h3>Görevler</h3><IconButton
                                title={'Çıkış'} color="default" onClick={this.onClose}
                                aria-label="add new duty"><MdClose/>
                            </IconButton></div>
                            <div className="formBody">
                                <TextField id="outlined-search" label="Görevin Adı" size="small" variant="outlined"
                                           fullWidth
                                           style={{margin: '5px'}}
                                           onChange={(val) => this.handleChange(val)}
                                />
                                <TextField
                                    size="small"
                                    id="outlined-multiline-static"
                                    label="Açıklama ve Notlar"
                                    fullWidth
                                    multiline
                                    rows="6"
                                    variant="outlined"
                                    style={{margin: '5px'}}
                                    onChange={(val) => this.handleChange2(val)}
                                />
                                <TextField
                                    id="datetime-local"
                                    label="Next appointment"
                                    type="datetime-local"
                                    defaultValue="2017-05-24T10:30"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(val) => this.handleDateChange(val)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div className="todo-footer">
                                    <Button variant="contained" color="primary" style={{marginTop: '10px'}}
                                            onClick={this.sendData}>
                                        Ekle
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default AddForm;