---
title: "How to speed up your slow Gradle builds"
date: '2017-06-09'
layout: post
draft: false
featured: false
tags:
  - gradle
  - android
image: ./images/1_h29dsnyS1_02DBvFZ9Gvag.jpg
---


# How to speed up your slow Gradle builds

It’s a few weeks after I/O ’17 now and I’m sure you’re all making your way through the many sessions at the conference.

One of the more practical sessions at I/O was [How to speed up your slow Gradle builds](https://www.youtube.com/watch?v=7ll-rkLCtyk). In this session the tools team presented 10 great tips for speeding up your gradle builds 🎉

I decided to compile these tips into a handy list for easy reference, so here it is 💡
> Disclaimer: these tips are not mine and are taken from the recording of the IO Session [How to speed up your slow Gradle builds](https://www.youtube.com/watch?v=7ll-rkLCtyk). The explanation of this tips is my own wording.
> All credit goes to Google and the Tools team.

### Tip 1 — Use the latest Android Gradle Plugin

The tools team are constantly improving the Android Gradle Plugin and improving build speed, so this tip is super easy. Always use the latest version!

```
    buildscript {
      repositories {
        google()
      }
     
     dependencies {
        classpath ‘com.android.tools.build.gradle:3.3.1’
     }
    }
```

### Tip 2 — Avoid legacy multidex

If you’re unsure what Multidex is, have a read of [this article.](https://developer.android.com/studio/build/multidex.html)

Native multidex on devices running API 21 and above has very little performance impact, but legacy multidex on older devices does!

**When developing your app, you should avoid using legacy multidex.**

This involves setting your app’s minSdkVersion to 21, and developing a device that is at least running API 21.

The good news is if you are using a newer version of Android Studio, it will set the minSdkVersion for you, so you shouldn’t need to do anything except hit the run button 🎉

### Tip 3 — Disable multi-APK (in development)

If you aren’t using *ABI or Density splits* in your app, you can skip this tip.

If you are, you should disable this for development builds as it slows down build times.

This can be achieved by passing a variable to gradle when running a development build, and disabling the splits when it’s present:

```
    android {
       if (project.hasProperty(‘devBuild’)){
          splits.abi.enable = false
          splits.density.enable = false
       }
    }
```

When building from the command-line:

```
./gradlew assembleDevelopmentDebug -PdevBuild
```

When building from Android Studio:

Add *-PdevBuild* to the *Command-line options* field of the *Preferences -> Build, Execution, Deployment -> Compiler* settings in Android Studio:

![](https://cdn-images-1.medium.com/max/3876/1*4ak8gBYanWfdrF7yW34fBQ.png)

### Tip 4 — Minimize included resources

Resources take up a sizable amount of space in your APK, and packaging all these resources slows down your build.

For development builds, you can tell Gradle only to package the resources you care about, for the device you are developing on.

```
    productFlavors {
      development {
        minSdkVersion 21

        //only package english translations, and xxhdpi resources   
        resConfigs (“en”, “xxhdpi”)
      }
    }
```

### Tip 5 — Disable PNG Crunching

PNG optimizations are enabled by default, but are not needed for development builds. Disable them to speed up your builds.

```
    android {
      if (project.hasProperty(‘devBuild’)){
        aaptOptions.cruncherEnabled = false
      }
    }
```

### Tip 6 — Use Instant Run ⚡️

Instant Run gets a bit of a bad rap, but when it works it can really save you time.

Instant Run in Android Studio 3.0 has a lot of improvements, and should be a lot more stable.

Give it a go!

### Tip 7 — Avoid inadvertent changes

Gradle is super flexible and you can do some really cool things in your build scripts. But if you aren’t careful you can really slow down builds.

This little snippet of code sets the *versionCode* to the current time — Useful for testing, but it means that for every build, the manifest is changed causing unnecessary processing and packaging.

```
    //this is BAD!

    def buildDateTime = new Date().format(‘yyMMddHHmm’).toInteger()

    android {
      defaultConfig {
        versionCode buildDateTime
     }
    }
```

Instead, disable this on development builds:

```
    def buildDateTime = project.hasProperty(‘devBuild’) ? 100 : new Date().format(‘yyMMddHHmm’).toInteger()

    android {
      defaultConfig {
        versionCode buildDateTime
     }
    }
```

The rule of thumb here is make sure any custom logic, plugins or libraries are only modifying files when necessary, rather than every build.

Another common pitfall is Crashlytics build IDs. Crashlytics will generate a new build id for every build.

This can (and should) be disabled for debug builds with a single line:

```
    apply plugin: ‘io.fabric’

    android {
      buildTypes {
        debug {
          ext.alwaysUpdateBuildId = false
        }
      }
    }
```

### Tip 8 — Don’t use dynamic dependency versions

Using dynamic dependency versions is a big no-no for a couple of reasons:

* It creates non-derministic (or non-repeatable) builds.

* It causes Gradle to check for new dependency versions every 24 hours causing longer dependency resolution times.

Always use specific dependency versions!

### Tip 9 — Watch the memory

Be careful of the amount of memory you’re giving to Gradle.

For a great explanation on Gradle memory settings and Dex In Process, read [this article by Reto Meier](https://medium.com/google-developers/faster-android-studio-builds-with-dex-in-process-5988ed8aa37e).

You’ll want to play around the amount of memory you give Gradle:

```
    org.gradle.jvmargs=-Xmx1536m
```

And since the release of Dex In Process, this old optimization is no longer needed:

``` 
    dexOptions {
     javaMaxHeapSize = ‘4g’
    }
```

### Tip 10 — Enable Gradle Caching

Gradle Caching is new in Gradle 3.5, and when enabled Gradle will cache and reuse outputs from previous builds.

This works for any build, any branch changes, and across projects.

Android Studio 3.0 takes even more advantage of this cache, so make sure you have it enabled:

```
    # Set this in gradle.properties
    org.gradle.caching=true
```

### Final Tip

Watch the [session](https://www.youtube.com/watch?v=7ll-rkLCtyk), you’ll learn a lot!

If you liked this article, make sure to ❤ it below, and follow me [on twitter](https://goo.gl/OgwlgJ)!