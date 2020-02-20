import React, {Component} from 'react';
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import {MdClose} from "react-icons/md";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                adi: '',
                aciklama: ''
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
                                           onChange={(val) => this.handleChange(val)}
                                />
                                <TextField
                                    size="small"
                                    id="outlined-multiline-static"
                                    label="Açıklama ve Notlar"
                                    multiline
                                    rows="6"
                                    variant="outlined"
                                    onChange={(val) => this.handleChange2(val)}
                                />
                                <Button variant="contained" color="primary" onClick={this.sendData}>
                                    Ekle
                                </Button>
                            </div>
                        </Paper>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default AddForm;