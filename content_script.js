// 受信
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.greeting != "hello")
		return;
		
	var resultList = [];

	var $musics = $(".cl_music_data");
	$musics.each(function() {
		var $music = $(this);
		var seq = parseInt($music.find('.cl_music_data_seq').text());
		var title = $music.find('.cl_music_data_title').text();

		if (!title) return;

		$.each(DIFFICULTY_LIST, function() {
			var difficulty = this;
			var scores = getScores(seq, difficulty);
			var result = $.extend(scores, {
				seq: seq,
				title: title,
				difficulty: DIFFICULTY_TEXTS[difficulty],
			});
		
			resultList.push(result);
		});
	});

	sendResponse(resultList);
});