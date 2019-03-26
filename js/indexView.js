var indexView = {

	bindButtons: function () {
		$('#cmbTipoGerador').change(function () {

			$('#divFilmeSerie').hide();
			$('#divJogosSteam').hide();
			$('#divPlayStore').hide();

			switch ($(this).val()) {
				case "1":
					$('#divFilmeSerie').show();
					break;
				case "2":
					$('#divJogosSteam').show();
					break;
				case "3":
					$('#divPlayStore').show();
					break;
				case "4":
					$('#divLastFM').show();
					break;
				default:
					break;
			}

		});

		$('#btnLoadImdb').click(function () {

			GeradorFilmeSerieEpisodio.IMDbId = $('#txtIMDbId').val().trim();
			GeradorFilmeSerieEpisodio.Validar();
		});

		$('#btnLoadSteam').click(function () {

			GeradorJogosSteam.SteamId = $('#txtSteamId').val().trim();
			GeradorJogosSteam.Validar();
		});

		$('#btnLoadPlayStore').click(function () {

			GeradorAplicativoPlayStore.GooglePlayId = $('#txtPlayStoreId').val().trim();
			GeradorAplicativoPlayStore.Validar();
		});

		$('#btnLoadLastFM').click(function () {
			geradorAlbumLastFM.urlLastFM = $('#txtLastFMUrl').val().trim();
			geradorAlbumLastFM.Validar();
		});

		$(document)
			.ajaxStart(function () {
				$('#pageLoader').addClass("is-active");
			})
			.ajaxStop(function () {
				$('#pageLoader').removeClass("is-active");
			});

		$('.tooltip').tooltipster({
			theme: 'tooltipster-shadow',
			animation: 'fade',
			delay: 100,
			trigger: 'click',
			side: ['right']


		});



	}
};
