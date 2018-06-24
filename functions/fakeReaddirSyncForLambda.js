const pathModule = require('path');

require('sinon')
  .stub(require('fs'), 'readdirSync')
  .callThrough()
  .withArgs(pathModule.resolve(__dirname, '..', 'node_modules', 'assetgraph', 'lib', 'transforms'))
  .returns([
    'addCacheManifest.js',
    'addDataVersionAttributeToHtmlElement.js',
    'addJavaScriptSourceUrl.js',
    'addPrecacheServiceWorker.js',
    'addRelNoopenerToBlankTargetAnchors.js',
    'applySourceMaps.js',
    'autoprefixer.js',
    'bundleRelations.js',
    'bundleRequireJs.js',
    'bundleSystemJs.js',
    'bundleWebpack.js',
    'compressJavaScript.js',
    'convertCssImportsToHtmlStyles.js',
    'convertHtmlStylesToInlineCssImports.js',
    'convertStylesheetsToInlineStyles.js',
    'drawGraph.js',
    'duplicateFavicon.js',
    'executeJavaScriptInOrder.js',
    'externalizeRelations.js',
    'gzip.js',
    'inlineAssetsPerQueryString.js',
    'inlineCriticalCss.js',
    'inlineCssImagesWithLegacyFallback.js',
    'inlineHtmlTemplates.js',
    'inlineRelations.js',
    'loadAssets.js',
    'logEvents.js',
    'mergeIdenticalAssets.js',
    'minifySvgAssetsWithSvgo.js',
    'moveAssetsInOrder.js',
    'moveAssets.js',
    'populate.js',
    'pullGlobalsIntoVariables.js',
    'removeDuplicateHtmlStyles.js',
    'removeEmptyJavaScripts.js',
    'removeEmptyStylesheets.js',
    'removeRelations.js',
    'removeUnreferencedAssets.js',
    'replaceSymbolsInJavaScript.js',
    'reviewContentSecurityPolicy.js',
    'reviewSubResourceIntegrity.js',
    'serializeSourceMaps.js',
    'setAsyncOrDeferOnHtmlScripts.js',
    'setHtmlImageDimensions.js',
    'setSourceMapRoot.js',
    'splitCssIfIeLimitIsReached.js',
    'startRepl.js',
    'stripDebug.js',
    'subsetFonts.js',
    'updateAssets.js',
    'writeAssetsToDisc.js',
    'writeAssetsToStdout.js',
    'writeStatsToStderr.js'
  ])
  .withArgs(pathModule.resolve(__dirname, '..', 'node_modules', 'assetgraph', 'lib', 'assets'))
  .returns([
    'ApplicationManifest.js',
    'Asset.js',
    'Atom.js',
    'CacheManifest.js',
    'ContentSecurityPolicy.js',
    'Css.js',
    'Eot.js',
    'Flash.js',
    'Font.js',
    'Gif.js',
    'Htc.js',
    'Html.js',
    'I18n.js',
    'Ico.js',
    'Image.js',
    'JavaScript.js',
    'Jpeg.js',
    'Json.js',
    'MsApplicationConfig.js',
    'Otf.js',
    'Png.js',
    'Rss.js',
    'SourceMap.js',
    'SrcSet.js',
    'Svg.js',
    'Text.js',
    'Ttf.js',
    'Webp.js',
    'Woff2.js',
    'Woff.js',
    'Xml.js',
    'Xslt.js'
  ])
  .withArgs(pathModule.resolve(__dirname, '..', 'node_modules', 'assetgraph', 'lib', 'relations'))
  .returns([
    'CacheManifestEntry.js',
    'CssAlphaImageLoader.js',
    'CssBehavior.js',
    'CssFontFaceSrc.js',
    'CssImage.js',
    'CssImport.js',
    'CssSourceMappingUrl.js',
    'CssSourceUrl.js',
    'CssUrlTokenRelation.js',
    'FileRedirect.js',
    'HtmlAlternateLink.js',
    'HtmlAnchor.js',
    'HtmlApplet.js',
    'HtmlAppleTouchStartupImage.js',
    'HtmlApplicationManifest.js',
    'HtmlAudio.js',
    'HtmlAuthorLink.js',
    'HtmlCacheManifest.js',
    'HtmlConditionalComment.js',
    'HtmlContentSecurityPolicy.js',
    'HtmlDataBindAttribute.js',
    'HtmlDnsPrefetchLink.js',
    'HtmlEdgeSideInclude.js',
    'HtmlEdgeSideIncludeSafeComment.js',
    'HtmlEmbed.js',
    'HtmlFluidIconLink.js',
    'HtmlFrame.js',
    'HtmlIFrame.js',
    'HtmlIFrameSrcDoc.js',
    'HtmlImage.js',
    'HtmlImageSrcSet.js',
    'HtmlImport.js',
    'HtmlInlineEventHandler.js',
    'HtmlInlineFragment.js',
    'HtmlInlineScriptTemplate.js',
    'HtmlKnockoutContainerless.js',
    'HtmlLogo.js',
    'HtmlMetaRefresh.js',
    'HtmlMsApplicationConfig.js',
    'HtmlMsApplicationTileImageMeta.js',
    'HtmlNoscript.js',
    'HtmlObject.js',
    'HtmlOpenGraph.js',
    'HtmlParamsAttribute.js',
    'HtmlPictureSource.js',
    'HtmlPictureSourceSrcSet.js',
    'HtmlPreconnectLink.js',
    'HtmlPrefetchLink.js',
    'HtmlPreloadLink.js',
    'HtmlPrerenderLink.js',
    'HtmlRelation.js',
    'HtmlResourceHint.js',
    'HtmlScript.js',
    'HtmlSearchLink.js',
    'HtmlServiceWorkerRegistration.js',
    'HtmlShortcutIcon.js',
    'HtmlStyleAttribute.js',
    'HtmlStyle.js',
    'HtmlSvgIsland.js',
    'HtmlTemplate.js',
    'HtmlVideo.js',
    'HtmlVideoPoster.js',
    'HttpRedirect.js',
    'index.js',
    'JavaScriptExport.js',
    'JavaScriptFetch.js',
    'JavaScriptImport.js',
    'JavaScriptImportScripts.js',
    'JavaScriptServiceWorkerRegistration.js',
    'JavaScriptSourceMappingUrl.js',
    'JavaScriptSourceUrl.js',
    'JavaScriptStaticUrl.js',
    'JavaScriptWebWorker.js',
    'JsonUrl.js',
    'MsApplicationConfigImage.js',
    'MsApplicationConfigPollingUri.js',
    'Relation.js',
    'RssChannelLink.js',
    'SourceMapFile.js',
    'SourceMapSource.js',
    'SrcSetEntry.js',
    'SvgAnchor.js',
    'SvgFontFaceUri.js',
    'SvgImage.js',
    'SvgInlineEventHandler.js',
    'SvgPattern.js',
    'SvgRelation.js',
    'SvgScript.js',
    'SvgStyleAttribute.js',
    'SvgStyle.js',
    'SvgUse.js',
    'SystemJsBundle.js',
    'SystemJsLazyBundle.js',
    'XmlHtmlInlineFragment.js',
    'XmlStylesheet.js'
  ]);