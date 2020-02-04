import React from "react";
import { Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { FormGroup, InputGroup , NumericInput, Card,
    Button, H1,  Dialog,  HTMLSelect , ControlGroup,
    EditableText, RadioGroup , Radio , Tag, ButtonGroup} from "@blueprintjs/core";


interface Props{
}



export const Form : React.FC<Props> = (props : Props)  =>{
    let intent : Intent = Intent.NONE;
    let labelInfo : string = '(필수입력)';
    let caption = {
        dialog_header_title : '가계부 추가하기',
        title_label_title : '사용처',
        amount_label_title : '사용금액',
        type_label_title : '지출 타입',
    }


    const CATEGORIES_OPTIONS = ['교육비','커피값','라이센스비용','적금','월세','통신비'];

    let isImcome = '소득' === '소득' ? true : false;
    isImcome= !isImcome;
    return (
        <div>

            <Dialog
                className="popup"
                icon={IconNames.CONFIRM}
                onClose={()=>{console.log('close()')}}
                title={caption.dialog_header_title}
                isOpen={true}>
                        
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
                                    large={true} fill={true} min={0} placeholder="amount" 
                                    onValueChange={(_v,value) =>  console.log( _v, value)} />
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
                            onChange={(d)=>{console.log(d)}}>
                            <Radio label="소득" value="소득" />
                            <Radio label="지출" value="지출" />
                        </RadioGroup>

                        <ControlGroup >
                            <HTMLSelect options={CATEGORIES_OPTIONS} />
                            <InputGroup placeholder="카테고리 추가" />
                            <Button icon={IconNames.PLUS} value='카테고리 추가' />
                        </ControlGroup>
                        <span>(항목 삭제, 수정은 설정을 이용해주세요)<a href='#'>(link)</a></span>
                    </FormGroup>
                </Card>
                <Card elevation={4} style={{margin : 10}}>
                    <ButtonGroup alignText="right">
                        <Button icon={IconNames.SAVED}>입력</Button>
                        <Button icon={IconNames.STOP}>닫기</Button>
                        <Button icon={IconNames.CONFIRM}>확인</Button>
                    </ButtonGroup>
                </Card>
            </Dialog>
        </div>
    )
}