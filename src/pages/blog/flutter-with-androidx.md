---
title: "Flutter, now with AndroidX"
date: '2019-05-11'
layout: post
draft: false
featured: true
tags:
  - flutter
  - android
image: ./images/flutter-androidx.jpg
---


# Flutter, now with AndroidX

Google [announced AndroidX](https://android-developers.googleblog.com/2018/05/hello-world-androidx.html) back in May 2018 as a new era of the Android Support Library.

Since then, AndroidX has hit 1.0 and the community has been slowly adopting the new libraries. But where does Flutter stand?

## Flutter + AndroidX = ⚠️

If you've had any serious experience with Flutter, you've probably hit issues with AndroidX - particularly when using third party plugins like Firebase.

I've been using Flutter in an 'add2app' scenario over the last few months. This means working in a Flutter module (slightly different to a standard Flutter project), 
and adding Flutter to an existing iOS and Android app. 

One of the first issues I ran into was AndroidX build issues. Usually these can be fixed fairly easily by updating the Flutter app's build.gradle to use AndroidX.

Flutter modules however regenerate the Android module each time a command like **'flutter packages get'** is run. This meant having to commit my changes to vcs and constantly revert them. 😕

## Adding AndroidX support

After a few weeks of this I decided enough was enough. Flutter is open source - maybe I can fix this!

💡**Only interested in how to enable AndroidX in Flutter? [Skip to the end](#using-androidx-with-flutter)**💡

It turns out it was actually pretty easy. The Flutter tool is written in dart, and new projects/modules/plugins are created using [mustache templates](https://mustache.github.io/).

The templates can be found in `flutter_root/packages/flutter_tools/templates`.

Modifying these was as simple as adding conditional logic based on a flag:

```
{{#androidX}}
android.useAndroidX=true
android.enableJetifier=true
{{/androidX}}
```

I also had to define the `androidX` flag somewhere. There are 2 use cases to support here:

#### Creating new projects and plugins

Adding support for AndroidX when creating a new project meant adding a new commandline flag.

These flags are all defined in `flutter_root/packages/flutter_tools/lib/src/commands/create.dart`.

Adding a new flag is straight forward:

```dart
 argParser.addFlag(
      'androidx',
      negatable: true,
      defaultsTo: false,
      help: 'Generate a project using the AndroidX support libraries',
    );
```

#### Flutter modules

Since Flutter modules regenerate the Android module container often, a flag in the Flutter create command wasn't enough.

I needed to add a flag somewhere it could be read by the Flutter tool and updated by the user - pubspec.yaml seemed perfect!

A Flutter modules pubspec already contains a section for configuring a module, so this seemed like a good place to add an AndroidX flag:

```yaml
flutter:
  uses-material-design: true

  module:
    androidX: true
    androidPackage: my.package
    iosBundleIdentifier: my.package
```

Teaching Flutter to read this flag was a case of modifying the `FlutterManifest.dart` and `FlutterProject.dart` files:


```dart
  ////flutter_root/packages/flutter_tools/lib/src/flutter_manifest.dart
  
  /// True if this Flutter module should use AndroidX dependencies.
  ///
  /// If false the deprecated Android Support library will be used.
  bool get usesAndroidX {
    return _flutterDescriptor['module']['androidX'] ?? false;
  }
```

With a bit more glue to tie these pieces together, and of course some tests, I had working AndroidX support 🎉


## Working with Flutter tool changes

You might be wondering what the experience is like when making changes to the Flutter tool. Flutter has some [good documentation](https://github.com/flutter/flutter/wiki/The-flutter-tool#making-changes-to-the-flutter-tool)
around this, and the development workflow is pretty great!

The Flutter tool is actually a git repo on your machine. When changing release channels for example (flutter channel beta), you are really just switching branches in the git repo.

Try opening your Flutter root install folder in your favourite Git client and you'll see, it's just a standard repo!

The Flutter tool will detect any changes you make locally, and rebuild itself when next running a Flutter command.

This means the workflow is simply:

- make changes in the Flutter repo
- run 'flutter packages get' or another Flutter command
- Flutter rebuilds
- test changes

In the case where Flutter doesn't detect a change you can manually delete the 'bin/cache/flutter_tools.snapshot' file to trigger a rebuild.

Once you're all finished, push your changes to a branch (in your own fork of course), and make a Pull Request.

### Using AndroidX with Flutter

AndroidX support has now been [merged to master](https://github.com/flutter/flutter/pull/31028), so you can start using it today.

How?

AndroidX support is disabled by default for now, so when creating a new project, simply pass the `--androidx` flag.

`flutter create -a kotlin -i swift --androidx my_awesome_app` 

For existing Flutter modules, add the `androidX: true` flag to your pubspec.yaml and run 'flutter packages get'. See above for more info.

### Try it out

Try out AndroidX support today, and please file any issues you come across - it would be great to see AndroidX become the default setting in the near future!

If you liked this article, make sure to ❤ it below, and follow me [on twitter](https://goo.gl/OgwlgJ)!