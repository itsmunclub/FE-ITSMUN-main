export default (context, inject) => {
  const SEOMeta = ({
    urlSite,
    metaTitle,
    metaImage,
    metaDesc,
    metaKeywords,
  }) => {
    const contentImage = metaImage || '/favicon.ico'
    const site = urlSite || ''
    const contentDesc = metaDesc || process.env.npm_package_description
    return {
      title: metaTitle,
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://itsmunclub.space/${site}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: contentDesc,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: metaTitle,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: metaTitle,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: contentDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: contentImage,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: contentDesc,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: contentImage,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: metaKeywords || 'ITS MUN CLUB , MUN',
        },
      ],
    }
  }

  inject('SEOMeta', SEOMeta)
}
