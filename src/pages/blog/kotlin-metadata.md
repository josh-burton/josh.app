---
title: "Kotlin Metadata, Jackson and Proguard"
date: '2017-06-08'
layout: post
draft: false
featured: true
tags:
  - android
  - kotlin
  - proguard
image: ./images/kotlin-metadata.jpg
---

# Kotlin Metadata, Jackson and Proguard

If like me you are having issues deserializing json with Jackson into Kotlin Data classes, then this post is for you!

*FasterXml* provides a [jackson-kotlin-module](https://github.com/FasterXML/jackson-module-kotlin) that supports deserializing kotlin classes and data classes, which is great!

But if you are using **proguard**, you may still run into issues.

After banging my head against a wall all day, and a lot of trial and error, I discovered the problem: kotlin.Metadata

### What is kotlin.Metadata?

As explained in [this stackoverflow question](https://stackoverflow.com/questions/36816521/is-the-format-of-the-data-held-in-kotlin-metadata-documented-anywhere), kotlin.Metadata is an annotation that contains extra information about a class that is not present in JVM signatures.

It makes sense that Jackson would need this information in order to deserialize data classes!

### What’s the fix?

Simply add the following rule to your proguard file to prevent proguard stripping the kotlin.Metadata annotation:

```
-keep class kotlin.Metadata { *; }
```

Simple!

### Bonus

I also discovered I needed to add a rule to keep synthetic methods on kotlin classes I wanted to use for deserialization. Maybe it will help you too!

```
-keepclassmembers public class com.mypackage.** {
    public synthetic <methods>;
}
```

If you liked this article make sure to 😍 it, and follow me [on twitter](http://twitter.com/athornz).
