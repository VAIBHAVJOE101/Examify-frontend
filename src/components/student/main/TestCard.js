import { Box, Stack, Button, Divider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';


export default function TestCard({data, isbtn, index}) {
  const history = useHistory();

  const onTestStart = () => {
    console.log('disptach Action for Start Test', index);
    history.push(`/StudentTest/${index}`);
  }



  const changeTimeStamptoDate = (timeStamp) => {
    var date = new Date(timeStamp*1000);
    var str = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":";

    if(date.getMinutes() < 10)
    str = str + "0";

    str = str + date.getMinutes();
    return str;
  }


  return (
    <Box sx={{mb: 1}}>
      <Stack spacing={3} sx={{ p: 3, pr: 5, pl: 10 }}>
        <Stack  direction="row" alignItems="center" justifyContent="space-between">
              <Box sx={{ minWidth: 240 }}>
                    <Typography variant="h4" noWrap>
                        {data?.title}
                    </Typography>

                    <Typography variant="subtitle2" noWrap>
                        Exam Duration: {Math.round((data?.endTime - data?.startTime)/1000)} mins
                    </Typography>

                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
                        {changeTimeStamptoDate(data?.startTime)} - {changeTimeStamptoDate(data?.endTime)}
                    </Typography>

            </Box>
            {isbtn && 
            <Button variant="contained" size="large" onClick  ={() => onTestStart()}>
                    Start Test
              </Button>
            }
                
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}
