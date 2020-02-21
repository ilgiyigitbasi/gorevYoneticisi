import React, {Component} from 'react';
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import {MdClose} from "react-icons/md";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Radio} from "@material-ui/core";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: Math.random(),
                adi: '',
                aciklama: '',
                date: "2017-05-24T10:30",
                type: 'gunluk',
            }
        }
    };


    onClose = () => {
        this.props.onClose();
    };

    handleChange = (evt) => {
        let val = evt.target.value;
        let name = evt.target.name;
        this.setState({
            data: {
                ...this.state.data,
                [name]: val,
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
                            <div className='formHeader'><h3>Görev Ekle</h3><IconButton
                                title={'Çıkış'} color="default" onClick={this.onClose}
                                aria-label="add new duty"><MdClose/>
                            </IconButton></div>
                            <div className="formBody">
                                <TextField id="outlined-search" label="Görevin Adı" size="small" variant="outlined"
                                           name="adi"
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
                                    name="aciklama"
                                    rows="6"
                                    variant="outlined"
                                    style={{margin: '5px'}}
                                    onChange={(val) => this.handleChange(val)}
                                />
                                <TextField
                                    id="datetime-local"
                                    label="Tarihi ve Saati"
                                    type="datetime-local"
                                    defaultValue="2017-05-24T10:30"
                                    fullWidth
                                    name="date"
                                    variant="outlined"
                                    style={{margin: '5px'}}
                                    onChange={(val) => this.handleChange(val)}
                                />
                                <FormLabel component="legend">Görevin Türü</FormLabel>
                                <RadioGroup defaultValue="gunluk" aria-label="Görev Türü" name="type"
                                            onChange={val => this.handleChange(val)}>
                                    <FormControlLabel value="gunluk" control={<Radio/>} label="Günlük"/>
                                    <FormControlLabel value="haftalik" control={<Radio/>} label="Haftalık"/>
                                    <FormControlLabel value="aylik" control={<Radio/>} label="Aylık"/>
                                </RadioGroup>
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