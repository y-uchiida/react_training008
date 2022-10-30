import { Avatar, Box, Button, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { palette } from '../../conf/theme';
import { grey } from '@mui/material/colors'

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

export const TweetBox = () => {
	return (
		<Box sx={{ borderBottom: `1px solid ${palette.primary.light}` }}>
			<form action="">
				<Box display={'flex'} sx={{ p: 2 }} columnGap={2}>
					<Avatar />
					<Box width={'100%'}>
						<TweetInput
							id="standard-multiline-static"
							placeholder="いまどうしてる？"
							multiline
							minRows={1}
							maxRows={10}
							variant="standard"
							fullWidth
						/>
						<ImageUrl variant='standard' fullWidth placeholder='画像のURLを入力してください' />
						<Box display='flex' flexDirection={'row-reverse'}>
							<Button variant='contained' disableElevation type='submit'>
								<Typography fontWeight={600}>ツイートする</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			</form>
		</Box>
	)
}
