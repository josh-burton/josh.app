---
title: "Disabling Touchwiz Icon Frames"
date: '2017-05-04'
layout: post
draft: false
featured: false
tags:
  - samsung
  - google
image: ./images/1_nifQBVGSbBAjU88UfrSQ-w.jpg
---

# Disabling Touchwiz Icon Frames

Samsung's TouchWiz interface is known for completely customising the look and feel of Android, but this time they may have gone too far!

Starting with the Galaxy Note 7 and Galaxy S8, TouchWiz will take your beautifully designed app icon, and surround it in a rounded square frame:

![](./images/touchwiz-icon-comparison.png)

## Not cool Samsung, not cool. Let’s fix it!

Users can disable this setting via a system option, but it’s turned on by default. 😡

Thankfully, there is a fix 🎉

Simply include the following [meta-data tag](https://gist.github.com/athornz/341616b3c4d4b584a5e4b5ad9ab35e83) in your app’s *ApplicationManifest.xml* to disable the icon frame on your app icon.

```xml
<application>
<meta-data
	android:name="com.samsung.android.icon_container.has_icon_container"
	android:value="true"/>
</application>
```

### Your designer will thank you!

If you liked this article make sure to 😍 it, and follow me [on twitter](http://twitter.com/athornz).
