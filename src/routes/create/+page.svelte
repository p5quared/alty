<div class="container h-full mx-auto space-y-5">
	<h1 class="h1">Create a Misdirection!</h1>
	<form  method="POST" class="space-y-7 lg:max-w-lg">
		<label for="title">
		<span class="text-lg">Title</span>
			<input type="text" name="og_title" id="title" class="form-input mt-1 block w-full outline outline-primary-500" placeholder="Misdirection Title">
		</label>

		<label for="type">
		<span class="text-lg">Type</span>
		<select name="og_type" id="type" class="form-select mt-1 block w-full outline outline-primary-500 text-black">
			<option value="1">website</option>
			<option value="2">article</option>
			<option value="3">music (song)</option>
			<option value="4">video (other)</option>
		</select>
		</label>

		<label for="image">
		<span class="text-lg">Image URL</span>
			<input type="url" name="og_image" id="image" class="form-input mt-1 block w-full outline outline-primary-500 text-black"
				placeholder="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif">
		</label>

		<label for="realURL">
		<span class="text-lg">Real URL</span>
			<input type="url" name="realURL" id="realURL" class="form-input mt-1 block w-full outline outline-primary-500 text-black"
				placeholder="https://youtu.be/dQw4w9WgXcQ">
		</label>

		<label for="fakeURL">
		<span class="text-lg">Fake URL</span>
			<input type="url" name="og_url" id="fakeURL" class="form-input mt-1 block w-full outline outline-primary-500 text-black"
				placeholder="https://news.com/serious-article">
		</label>

		<label for="description">
		<span class="text-lg">Description</span>
			<textarea name="og_description" id="description" class="form-textarea mt-1 block w-full outline outline-primary-500 text-black"
				placeholder="This is a real page about real things!!!"></textarea>
		</label>

		<button type="submit" class="btn variant-filled-primary">
			Create
		</button>
	</form>
</div>
