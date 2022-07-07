import { Text, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Radio, RadioGroup, SimpleGrid, Stack, VStack, Checkbox, Button, Select, Box } from "@chakra-ui/react";
import { Field, Formik, FormikProps } from "formik"
import { useState } from 'react'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  age: yup
    .number()
    .typeError('must be number')
    .required('required'),
  mobileNo: yup
    .string()
    .test('len', 'mobileNo must be 10 digits', val => val && val.length === 10 && typeof (+val) === 'number')
    .required('required'),
})

export function Child0to15() {

  const onSubmit = async (values: any, actions: any) => {

  }
  
  return (<Stack p={4}>
            <Heading as="h4" fontSize={`2xl`} textAlign={`center`} whiteSpace="pre-wrap">แบบบันทึกการเฝ้าระวังและส่งเสริมพัฒนาการเด็กปฐมวัย (DSPM) ตามช่วงอายุ แรกเกิด - 15 เดือน</Heading>
            <Formik
            isValidating={false}
            validationSchema={validationSchema}
            initialValues={{ 
              firstName: '', lastName: '', birthday: '', sex: '',
            }}
            onSubmit={onSubmit}
            >{(props: FormikProps<Values>) => (
        <form id="metabolic" onSubmit={props.handleSubmit}>
        <SimpleGrid columns={2} spacing={4}>
            <Field name="firstName">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                <FormLabel>ชื่อ* </FormLabel>
                <Input {...field}/>
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
            </Field>
            <Field name="lastName">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                <FormLabel>นามสกุล*</FormLabel>
                <Input {...field}/>
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
            </Field>
            <Field name="birthday">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.birthday && form.touched.birthday}>
                <FormLabel>วัน/เดือน/ปี เกิด*</FormLabel>
                <Input {...field}/>
                <FormErrorMessage>{form.errors.birthday}</FormErrorMessage>
              </FormControl>
            )}
            </Field>
            <FormControl>
                <FormLabel>เพศ</FormLabel>
                <RadioGroup isDisabled={true} name="sex" value={props.values.sex} onChange={(e) => props.setFieldValue('sex',e) }>
                <Stack direction='row'>
                    <Radio value='ชาย'>ชาย</Radio>
                    <Radio value='หญิง'>หญิง</Radio>
                </Stack>
                </RadioGroup>
            </FormControl>
        </SimpleGrid>

        <Box py={4} />
        
        <Select placeholder='ช่วงอายุ'>
          <option value='form1'>แรกเกิด-1 เดือน</option>
          <option value='form2'>1-2 เดือน</option>
          <option value='form3'>3-4 เดือน</option>
          <option value='form4'>5-6 เดือน</option>
          <option value='form5'>7-9 เดือน</option>
          <option value='form6'>10-12 เดือน</option>
          <option value='form7'>13-15 เดือน</option>
        </Select>
    
        <SimpleGrid  py={4} columns={1}>

          <FormLabel>ด้านการเคลื่อนไหว Gross Motor (GM)</FormLabel>
          <Text>1. ท่านอนคว่ำยกศีรษะและหันไปด้านข้างใดหนึ่งได้</Text>
          <FormControl isInvalid={props.errors.form1_1 && props.touched.form1_1}>
              <RadioGroup name="form1_1" onChange={(e) => props.setFieldValue('form1_1',e)}>
              <Stack direction='row'>
                <Radio value='ผ่าน'>ผ่าน</Radio>
                <Radio value='ไม่ผ่าน'>ไม่ผ่าน</Radio>
              </Stack>
              </RadioGroup>
          </FormControl>
          <FormLabel>ด้านกล้ามเนื้อมัดเล็กและสติปัญญา Fine Motor (FM)</FormLabel>
          <Text>2. มองตามถึงกึ่งกลางลำตัว</Text>
          <FormControl isInvalid={props.errors.form1_1 && props.touched.form1_1}>
              <RadioGroup name="form1_1" onChange={(e) => props.setFieldValue('form1_2',e)}>
              <Stack direction='row'>
                <Radio value='ผ่าน'>ผ่าน</Radio>
                <Radio value='ไม่ผ่าน'>ไม่ผ่าน</Radio>
              </Stack>
              </RadioGroup>
          </FormControl>
          <FormLabel>ด้ารการเข้าใจภาษา Receptive Language (RL)</FormLabel>
          <Text>3. สะดุ้งหรือเคลื่อนไหวร่างกายเมื่อได้ยินเสียงพูดระดับปกติ</Text>
          <FormControl isInvalid={props.errors.form1_1 && props.touched.form1_1}>
              <RadioGroup name="form1_1" onChange={(e) => props.setFieldValue('form1_3',e)}>
              <Stack direction='row'>
                <Radio value='ผ่าน'>ผ่าน</Radio>
                <Radio value='ไม่ผ่าน'>ไม่ผ่าน</Radio>
              </Stack>
              </RadioGroup>
          </FormControl>
          <FormLabel>ด้านการใช้ภาษา Expressive Language (EL)</FormLabel>
          <Text>4. ส่งเสียอ้อแอ้</Text>
          <FormControl isInvalid={props.errors.form1_1 && props.touched.form1_1}>
              <RadioGroup name="form1_1" onChange={(e) => props.setFieldValue('form1_4',e)}>
              <Stack direction='row'>
                <Radio value='ผ่าน'>ผ่าน</Radio>
                <Radio value='ไม่ผ่าน'>ไม่ผ่าน</Radio>
              </Stack>
              </RadioGroup>
          </FormControl>
          <FormLabel>ด้านการช่วยเหลือตัวเองและสังคม Personal and Social (PS)</FormLabel>
          <Text>5. มองจ้องหน้าได้นาน 1-2 วินาที</Text>
          <FormControl isInvalid={props.errors.form1_1 && props.touched.form1_1}>
              <RadioGroup name="form1_1" onChange={(e) => props.setFieldValue('form1_5',e)}>
              <Stack direction='row'>
                <Radio value='ผ่าน'>ผ่าน</Radio>
                <Radio value='ไม่ผ่าน'>ไม่ผ่าน</Radio>
              </Stack>
              </RadioGroup>
          </FormControl>
       
        </SimpleGrid>

        <Flex py={4} justify={`center`}>
          <Button type="submit">ยืนยัน</Button>
        </Flex>
        </form>
        )}
    </Formik>
    </Stack>
  )
}