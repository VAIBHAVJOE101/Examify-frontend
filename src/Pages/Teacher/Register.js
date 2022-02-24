import { Link as RouterLink, useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Stack, TextField, IconButton, InputAdornment, MenuItem,  FormControl, Autocomplete } from '@mui/material';
import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { LoadingButton } from '@mui/lab';
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import Logo from '../../components/Logo';
import { useDispatch } from 'react-redux';
import {TeacherRegister} from '../../redux/actions/teacher/teacherAuth';
import { useSelector } from 'react-redux';



const HeaderStyle = styled('header')(({ theme }) => ({
	top: 0,
	zIndex: 9,
	lineHeight: 0,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	position: 'absolute',
	padding: theme.spacing(3),
	justifyContent: 'space-between',
	[theme.breakpoints.up('md')]: {
		alignItems: 'flex-start',
		padding: theme.spacing(7, 5, 0, 7)
	}
}));


const RootStyle = styled(Page)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'flex'
	}
}));

const SectionStyle = styled(Card)(({ theme }) => ({
	width: '100%',
	maxWidth: 464,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	display: 'flex',
	minHeight: '100vh',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(12, 0)
}));


export default function Register() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [showPassword, setShowPassword] = useState(false);
	const [sections, setsections] = useState([1,2,3,4,5,6,7]);
	const [value, setValue] = useState([]);

	const RegisterSchema = Yup.object().shape({
		firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
		lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
		email: Yup.string().email('Email must be a valid email address').required('Email is required'),
		password: Yup.string().required('Password is required'),
		branch: Yup.string().required('Branch is required')
	});

	const formik = useFormik({
		initialValues: {firstName: '',lastName: '',email: '',password: '', branch: '', sections: []},
		validationSchema: RegisterSchema,
		onSubmit: async(values) => {
			values.sections = value;
			const errordata  = dispatch(TeacherRegister(values, history));
		}
	});

	const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
	
	return (
    <RootStyle title="Teacher Register">
	
		<HeaderStyle>
			<RouterLink to="/"><Logo /></RouterLink>
				<MHidden width="smDown">
        		<Typography variant="body2" sx={{mt: { md: -2 }}}>
          			Already have an account? &nbsp;
        			<Link underline="none" variant="subtitle2" component={RouterLink} to="/teacherLogin">
          				Login
        			</Link>
        		</Typography>
      		</MHidden>
    	</HeaderStyle>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Teacher Registeration
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Teacher Registeration
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Register to Examify
            </Typography>
          </Box>

           <FormikProvider value={formik}>
      		<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        	<Stack spacing={3}>
          		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            		<TextField
              		fullWidth
              		label="First name"
              		{...getFieldProps('firstName')}
              		error={Boolean(touched.firstName && errors.firstName)}
              		helperText={touched.firstName && errors.firstName}
            		/>

            		<TextField
              		fullWidth
              		label="Last name"
              		{...getFieldProps('lastName')}
              		error={Boolean(touched.lastName && errors.lastName)}
              		helperText={touched.lastName && errors.lastName}
            		/>
          		</Stack>

          		<TextField
            		fullWidth
            		autoComplete="username"
            		type="email"
            		label="Email address"
            		{...getFieldProps('email')}
            		error={Boolean(touched.email && errors.email)}
            		helperText={touched.email && errors.email}
          		/>

          		<TextField
            		fullWidth
            		autoComplete="current-password"
            		type={showPassword ? 'text' : 'password'}
            		label="Password"
            		{...getFieldProps('password')}
            		InputProps={{
              		endAdornment: (
                	<InputAdornment position="end">
                  		<IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    		<Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  		</IconButton>
                	</InputAdornment>
              		)
            		}}
            		error={Boolean(touched.password && errors.password)}
            		helperText={touched.password && errors.password}
          		/>

				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
					
				 	<FormControl fullWidth variant="standard" >
        				<TextField
						select
				  			fullWidth
            				type="branch"
            				label="Branch"
            				{...getFieldProps('branch')}
            				error={Boolean(touched.branch && errors.branch)}
            				helperText={touched.branch && errors.branch}
        				>
          					<MenuItem value="">
            						<em>None</em>
          					</MenuItem>
          					<MenuItem value={'Computer Science'}>Ten</MenuItem>
          					<MenuItem value={'Electornics '}>Twenty</MenuItem>
          					<MenuItem value={'EEE'}>Thirty</MenuItem>
        				</TextField>
					</FormControl>
					

					
				 		<Autocomplete
        				multiple
						fullWidth
        				id="tags-outlined"
        				options={sections}
        				getOptionLabel={(sections) => sections.toString()}
        				defaultValue={[]}
        				filterSelectedOptions
						onChange={(event, newValue) => {
							setValue([...newValue,]);
						  }}
        				renderInput={(params) => (
          					<TextField
            				{...params}
            				label="Sections"
            				placeholder="Choose Sections"
          				/>
        				)}
      					/>
					
				</Stack>

          		<LoadingButton
            		fullWidth
            		size="large"
            		type="submit"
            		variant="contained"
            		loading={isSubmitting}
          		>
            		Register
          		</LoadingButton>
        	</Stack>
      		</Form>
    	</FormikProvider>

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}