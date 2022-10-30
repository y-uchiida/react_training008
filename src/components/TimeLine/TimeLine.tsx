import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { palette } from '../../conf/theme';
import { TweetBox } from './TweetBox';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PostContent from '../../Entities/PostContent';
import Post from './Post';

const WrapBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
}));

const wrapBoxStyle = {
	borderRight: `1px solid ${palette.primary.light}`,
	overflowY: 'scroll',
	scrollbarWidth: 'none',
	'&::-webkit-scrollbar': {
		width: '0',
	},
}

const Header = styled(Box)({
	position: 'sticky',
	top: 0,
	background: 'rgba(255,255,255, 0.4)',
	backdropFilter: 'blur(12px)',
	zIndex: 100,
	borderBottom: `1px solid ${palette.primary.light}`,
});

const headerStyle = {
	paddingX: 2,
	py: 1
}

const posts: PostContent[] = [
	{
		authorId: '@samplepost',
		authorName: 'sample post user',
		authorAvatar: null,
		content: 'this is sample post content',
		imageUrl: [
			'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
			'https://images.unsplash.com/photo-1667108092570-cd4c3c8cf858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
			'https://images.unsplash.com/photo-1648037430023-147617b1798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		]
	},
	{
		authorId: '@another_user',
		authorName: 'another sample user',
		authorAvatar: 'http://flat-icon-design.com/f/f_object_174/s256_f_object_174_0bg.png',
		content: 'a, za, ra, shyyyyyyy',
		imageUrl: [
			'https://images.unsplash.com/photo-1587738972117-c12f8389f1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
		]
	},
	{
		authorId: '@another_another_user',
		authorName: 'one the another user',
		authorAvatar: '',
		content: 'no image post sample ',
	}
]

const TimeLine = () => {
	return (
		<WrapBox sx={wrapBoxStyle}>
			<Header sx={headerStyle}>
				<Typography component='h2' variant='h6' fontWeight={700}>ホーム</Typography>
			</Header>
			<TweetBox />

			<Grid container sx={{}}>
				<Grid>
					{posts.map((post, index) => {
						return <Post postContent={post} key={index} />
					})}
				</Grid>
			</Grid>
		</WrapBox>
	)
}

export default TimeLine
