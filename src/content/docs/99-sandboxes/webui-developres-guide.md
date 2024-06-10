# OpenIPC WebUI Developer's Guide

**slogan:** _document it, baby. ur mom._

## Brief summary

| name          | note | description          | stack of technologies | 
| --- | --- | --- | --- |
| [**webui**](#webui-also-legacy-webui) | _now legacy_    | Initial OpenIPC WebUI              | fronted: html + js <br> backend: haserl + sh |
| [**majestic-webui**](#majestic-webui) | **now default** | Deep refactoring of  initial webui | fronted: html + js <br> backend: haserl + sh |
| [**fancyweb**](#fancyweb)             | a bright future | Experiments with new stack of technologies | fronted: Preact + tailwind + js <br> backend: `??idontknow??` |



## Some tricks, before you start

Share some folder from your workstation via nfs, and mount it on camera:
```
mount -t nfs -o tcp,nolock,nfsvers=3 192.168.70.55:/some/folder/ /var/www
```
To simply update majestic-webui, run on camera:
```
updatewebui
```
what else can I add that I do not know about? `??idontknow??`


## Here we go


### - webui (also legacy-webui)

[webui repo](https://github.com/OpenIPC/webui) (now in frozen state, bug fixes only!)

**just a historical note:** It was created as a basic very simple interface in which you could apply basic settings not only in the console. It was initially linked to the built-in and simple httpd, which is included in the busybox package and worked on port 85. Haserl is used for CGI scripts, both simple and miniature.

After a lot of functions appeared in Majestic, as well as in connection with the expansion of launch capabilities on different processors, it became necessary to work with parameters that can be obtained directly from the streamer. in Legacy, you constantly have to parse the exhaust of variables, and turn on certain functions.

Also, the bulk of plugins have been developed in this interface, which many users liked, but this also played a bad role, the interface became buggy and clumsy. It was decided to make another interface, already linked to the streamer.



### - majestic-webui
[majestic-webui repo](https://github.com/OpenIPC/majestic-webui/)

Majestic WebUI was initially created to address some of the issues of the original (now legacy) webui:
- Reducing the bloat to simplify maintenance.
- Create a more dynamic and responsive settings page.
- Fixing various smaller issues.

The general structure is mostly oriented at the original design, but slimmed down as much as possible.
Concerns are mostly brought up if a dev brings in a lot of changes without further support from their side.
But if further maintenance is planned, then I see no reason against some refactoring/updating.

##### * Road Map
- [ ] filling out the developer's guide
- [ ] Teleport plugins (not just copy, a full refactoring with use of best practicies!) from legacy webui
- [ ] `??idontknow??`

##### * Directory structure

| path | description |
|---|---|
| www/                       | webroot, .html files |
| www/a/                     | .js, .css files, images |
| www/cgi-bin/               | .cgi scripts |
| www/cgi-bin/j/             | ??idontknow?? |
| www/cgi-bin/p/             | header, footer |
| www/cgi-bin/p/common.cgi   | functions, common used in other scripts |

##### * Code conventions
`??idontknow??`

##### * Best practicies
`??idontknow??`

##### * Some tricks
`??idontknow??`

##### * Template scripts (for a quick and proper start)
`??idontknow??`



### fancyweb and fancyweb-ng
[fancyweb repo](https://github.com/openipc/fancyweb/) ,
[fancyweb-ng repo](https://github.com/openipc/fancyweb-ng/)

Usefull links: [Preact](https://preactjs.com/) , [Tailwind CSS](https://tailwindcss.com/).

**fancyweb:** a gorgeous interface that did not find its embodiment simply because of some "fatness" at that time and the lack of API work in the streamer. Written in ReactJS.
[An excellent presentation](https://github.com/OpenIPC/fancyweb/blob/master/presentation/OpenIPC_fancyweb_interface_rus.pdf) is available to familiarize yourself with the possibilities.

**fancyweb-ng:** The main idea is to use modern techniques as Preact (not React but Preact) library and tailwind for styling. My (@LaikaPanda) goal is to create the maximum number of simple components that can be used in both. Regarding this choice, then Preact is small and quick and everybody knows it to maintain, and tailwind besides convenient approach significantly reduces the amount of code. 



##### * Road Map
- [ ] filling out the developer's guide

##### * Directory structure
| path | description |
|---|---|
|                        | |

##### * Code conventions
`??idontknow??`

##### * Best practicies
`??idontknow??`

##### * Some tricks
`??idontknow??`

##### * Template scripts (for a quick and proper start)
`??idontknow??`
