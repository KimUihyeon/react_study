import React from "react";
import { Intent  } from "@blueprintjs/core";
import { FormGroup, InputGroup , NumericInput, Card,
    Button, H5, Classes, Dialog,  HTMLSelect , ControlGroup } from "@blueprintjs/core";


interface Props{
    disabled : boolean;
}



const FILTER_OPTIONS = ["Filter", "Name - ascending", "Name - descending", "Price - ascending", "Price - descending"];

export const Form : React.FC<Props> = ({ disabled } : Props)  =>{
    let intent : Intent = Intent.NONE;
    let labelInfo : string = '(필수입력)';
    let caption = {
        dialog_header_title : '가계부 추가하기',
        title_label_title : '사용처',
        amount_label_title : '사용금액',
        type_label_title : '타입',
    }


    return (
        <div>

            <Dialog
                className="popup"
                icon="info-sign"
                onClose={()=>{console.log('close()')}}
                title={caption.dialog_header_title}
                isOpen={false}>
                        
                <Card elevation={4} style={{margin : 10}}>

                    <FormGroup
                        disabled={disabled}
                        inline={false}
                        intent={intent}
                        label={caption.title_label_title}
                        labelInfo={labelInfo}
                        labelFor="title">
                        <InputGroup 
                                    large={true} id="title" disabled={disabled}
                                    placeholder="title" intent={intent} />
                    </FormGroup>

                    <FormGroup
                        disabled={disabled}
                        inline={false}
                        intent={intent}
                        label={caption.amount_label_title}
                        labelInfo={labelInfo}
                        labelFor="amount">
                        <NumericInput
                                    id="amount"
                                    allowNumericCharactersOnly={true}
                                    buttonPosition="none"
                                    large={true} fill={true} min={0} placeholder="amount" 
                                    onValueChange={(_v,value) =>  console.log( _v, value)} />
                    </FormGroup>
                </Card>


                <Card elevation={4} style={{margin : 10}}>
                    <FormGroup
                        disabled={disabled}
                        inline={false}
                        intent={intent}
                        label={caption.type_label_title}
                        labelInfo={labelInfo}
                        labelFor="type">
                                    
                        <ControlGroup >
                            <HTMLSelect options={FILTER_OPTIONS} />
                            <InputGroup placeholder="카테고리 추가" />
                            <Button icon="arrow-right" />
                        </ControlGroup>
                    </FormGroup>
                </Card>
                <Card elevation={4} style={{margin : 10}}>
                        
                    <Button>입력</Button>
                </Card>
            </Dialog>
        </div>
    )
}