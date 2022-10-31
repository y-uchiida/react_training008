import { Avatar, Box, Button, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { palette } from '../../conf/theme';
import { grey } from '@mui/material/colors'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

const TweetInput = styled(TextField)({
	'& .MuiInputBase-root:before': {
		display: 'none'
	},

	'& .MuiInputBase-root:after': {
		borderBottom: `1px solid ${grey[400]}`
	},

});

const ImageUrl = styled(TextField)({
	'& .MuiInputBase-root': {
		':before, :after': {
			display: 'none'
		}
	}
});

const postTweet = async (
	e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	tweetContent: string,
	tweetImageUrl: string
) => {
	if (tweetContent === '') {
		return;
	}
	const timeStamp = serverTimestamp();
	await addDoc(collection(db, 'posts'), {
		authorId: '@firebase_post',
		authorName: 'firebase post',
		verified: false,
		content: tweetContent,
		imageUrl: [tweetImageUrl], /* 文字列で受け取る仕様にしてるので、いったん配列化して保存する */
		createdTime: timeStamp,
		updatedTime: timeStamp
	});
}

export const TweetBox = () => {

	const [tweetContent, setTweetContent] = useState('');
	const [tweetImageUrl, setTweetImageUrl] = useState('');


	return (
		<Box sx={{ borderBottom: `1px solid ${palette.primary.light}` }}>
			<Box display={'flex'} sx={{ p: 2 }} columnGap={2}>
				<Avatar />
				<Box width={'100%'}>
					<TweetInput
						id="postContent"
						placeholder="いまどうしてる？"
						multiline
						minRows={1}
						maxRows={10}
						variant="standard"
						fullWidth
						value={tweetContent}
						onChange={(e) => { setTweetContent(e.target.value) }}
					/>
					<ImageUrl
						variant='standard'
						placeholder='画像のURLを入力してください'
						fullWidth
						value={tweetImageUrl}
						onChange={(e) => { setTweetImageUrl(e.target.value) }}
					/>
					<Box display='flex' flexDirection={'row-reverse'}>
						<Button
							disabled={tweetContent === ''}
							variant='contained'
							disableElevation
							onClick={async (e) => {
								await postTweet(e, tweetContent, tweetImageUrl);
								setTweetContent('');
								setTweetImageUrl('');
							}}
						>
							<Typography fontWeight={600}>ツイートする</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
