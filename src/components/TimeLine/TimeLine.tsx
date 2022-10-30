import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { palette } from '../../conf/theme';
import { TweetBox } from './TweetBox';

const WrapBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
}));

const wrapBoxStyle = {
	pt: 1,
	borderRight: `1px solid ${palette.primary.light}`,
}

const Header = styled(Box)({
	position: 'sticky',
	top: 0,
	backGroundColor: 'white',
	zIndex: 100,
	borderBottom: `1px solid ${palette.primary.light}`,
});

const headerStyle = {
	paddingX: 2,
	pb: 1
}

const TimeLine = () => {
	return (
		<WrapBox sx={wrapBoxStyle}>
			<Header sx={headerStyle}>
				<Typography component='h2' variant='h6' fontWeight={700}>ホーム</Typography>
			</Header>
			<TweetBox></TweetBox>
		</WrapBox>
	)
}

export default TimeLine
