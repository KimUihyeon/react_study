import React from "react";
import { Intent, IOptionProps, Label } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { FormGroup, InputGroup , NumericInput, Card,
    Button, H1,  Dialog,  HTMLSelect , ControlGroup, Toast,
    EditableText, RadioGroup , Radio , Tag, ButtonGroup} from "@blueprintjs/core";
import { IMoney, ICard, IPayment } from "../interfacies";
import { PaymentMaster } from '../data/master'


let data : IOptionProps ={
    label : '123',
    value: '123',
}

interface Props{
    isModal : boolean,
    money : IMoney,
    handleClick_close : any,
    handleClick_save : any,
    handleFlagChange : any
}


export function MoneyForm ({isModal, money, handleClick_close, handleClick_save , handleFlagChange} : Props) {
    let intent : Intent = Intent.NONE;
    let labelInfo : string = '(필수입력)';
    let caption = {
        dialog_header_title : '가계부 추가하기',
        title_label_title : '사용처',
        amount_label_title : '사용금액',
        type_label_title : '지출 타입',
    }

    let masterPayment = PaymentMaster();
    let masterToOptionBox =  masterPayment.filter(t=>{return t.bankName.indexOf('전체') === -1 }).map(t=>{
        let optionBox : IOptionProps;
        return optionBox={
            label : t.bankName,
            value: t.id,
        }
    });
    
    const CATEGORIES_OPTIONS = ['교육비','커피값','라이센스비용','적금','월세','통신비'];
    let isImcome = money.type === '소득' ? true : false;

    return (
        <div>

            <Dialog
                className="popup"
                icon={IconNames.CONFIRM}
                onClose={()=>{handleClick_close()}}
                title={caption.dialog_header_title}
                isOpen={isModal}>
                        
                <Card elevation={4} style={{margin : 10}}>

                    <Tag style={{marginBottom : 6}}
                        icon={ isImcome ? IconNames.ADD : IconNames.REMOVE }
                        intent={ isImcome ? "success" : "danger"}>
                        { isImcome  ? "소득" : '지출'}
                    </Tag>

                    <H1>
                        <EditableText
                            alwaysRenderInput={true}
                            intent={intent}  
                            defaultValue={money.title}
                            onChange={(e)=>{money.title = e}}
                            placeholder="title"
                        />
                    </H1>

                    <FormGroup
                        disabled={false}
                        inline={false}
                        intent={intent}
                        label={caption.amount_label_title}
                        labelInfo={labelInfo}
                        labelFor="amount">
                        <NumericInput
                                    id="amount"
                                    allowNumericCharactersOnly={true}
                                    buttonPosition="none"
                                    value={money.amount.toString()}
                                    large={true} fill={true} min={0} placeholder="amount" 
                                    onValueChange={(_v,value) => {money.amount= _v}} />
                    </FormGroup>
                </Card>


                <Card elevation={4} style={{margin : 10}}>
                    <FormGroup
                        disabled={false}
                        inline={false}
                        intent={intent}
                        label={caption.type_label_title}
                        labelInfo={labelInfo}
                        labelFor="category">
                        
                        <RadioGroup
                            inline={true}
                            selectedValue={money.type}
                            onChange={(d)=>{
                                let target : any =  d.target;
                                handleFlagChange('type',target.value);
                            }}>
                            <Radio label="소득" value="소득"  onChange={()=>{}}/>
                            <Radio label="지출" value="지출"  onChange={()=>{handleFlagChange('type','지출')}}/>
                        </RadioGroup>


                        <FormGroup inline={true}>
                            <HTMLSelect options={CATEGORIES_OPTIONS} 
                                defaultValue={money.paymentType?.bankName} 
                                onChange={(e)=>{
                                    let value = e.target.value;
                                    money.category = value;
                                }}  />
                            <HTMLSelect options={masterToOptionBox}  
                                defaultValue={money.paymentType?.id} 
                                onChange={(e)=>{
                                    let value = Number(e.target.value)
                                    money.paymentType = masterPayment.filter(t=>t.id === value)[0];
                                }}  />
                        </FormGroup>
                            

                        <ControlGroup >
                            {/* <InputGroup placeholder="카테고리 추가" />
                            <Button icon={IconNames.PLUS} value='카테고리 추가' /> */}
                        </ControlGroup>
                        <span>(항목 삭제, 수정은 설정을 이용해주세요)<a href='#'>(link)</a></span>
                    </FormGroup>
                </Card>
                <Card elevation={4} style={{margin : 10}}>
                    <ButtonGroup alignText="right">
                        <Button icon={IconNames.SAVED} onClick={()=>{handleClick_save(money)}}>저장</Button>
                        <Button icon={IconNames.STOP} onClick={()=>{handleClick_close()}}>닫기</Button>
                        <Button icon={IconNames.CONFIRM} onClick={()=>{handleClick_close()}}>확인</Button>
                    </ButtonGroup>
                </Card>
            </Dialog>
        </div>
    )
}