<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's start misinforming!</h1>
		<p>Alty is a tool that allows you to spoof links very easily:</p>
		<a href="https://youtu.be/Oq7Qj-wi9VY?si=Am2V86ta6QNvrez3" target="_blank">
			<!-- Fake Tweet -->
		<div class="outline outline-1 outline-gray-400 p-4 bg-white text-black space-y-4">
			<div class="flex justify-between">
				<div class="flex">
				<Avatar src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
				width="w-12"/>
					<div class="ml-2">
						<p><b>Donald J. Trump</b></p>
						<p class="text-gray-400">@realDonaldTrump</p>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<button class="btn  bg-black text-white rounded-3xl p-3">
					<b>Follow</b>
					</button>
					<p class="text-black"><b>...</b></p>
				</div>
			</div>
			<p>
				FAKE NEWS - A TOTAL POLITICAL WITCH HUNT!
			</p>
			<p class="text-gray-400">8:19 PM | Jan 10, 2017</p>
		</div>
			<!-- Fake Tweet -->
		</a>

		<a href="/create" class="btn btn-primary variant-filled-primary">Let's Go!</a>


		<h2 class="h2">What is OpenGraph?</h2>
		<p>OpenGraph is a protocol that allows you to add metadata to your website, so that when you share it on social media, it will show a preview of the website.</p>
		<p>For example, if you share a link to a YouTube video, it will show the title, description, and thumbnail of the video.</p>
		<p>You've probably seen this before, but you might not have known what it was called.</p>
	</div>
</div>
