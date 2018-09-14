---
title: docker run
category: command cli
type: container
---

# docker container run

## 描述(Description)

 创建一个容器并且启动运行

## 用法(Usage)

```usage
 docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

## 相同功能命令(alias)

1. [docker run](#run)

### 选项(options)

选项参数类型为 `list` 的可多次配置

| 名称(name)，简写(shorthand) | 参数类型(type) | 默认参数(default) | 描述(description) | 类别(category) | 示列(example) |
| --- | --- | --- | --- | --- | --- |
| `--add-host` | `list`| |动态的添加容器内的`/etc/hosts`中的数据格式(host:ip) | | [详见add-host](#add-host) |
| `--attach` `-a` | `list` | | 指定挂载哪个标准流[^5] | | [详见attach](#attach) |
| `--blkio-weight` | `uint16` | `0` | 磁盘读写优先级权重 10-1000之间的无符号整形数字(0 禁止) | Cgroups[^1]`blkio` | [详见blkio-weight](#blkio-weight) |
| `--blkio-weight-device` | `list` |  | 磁盘设备优先级权重 | Cgroups`blkio` | [详见blkio-weight-device](#blkio-weight-device) |
| `--cap-add` | `list` |  | 添加liunx功能 | `capabilities` | [详见cap-add](bb) |
| `--cap-drop` | `list` | | 删除liunx功能 | `capabilities` | [详见cap-drop](bb) |
| `--cgroup-parent` | `string` | | 传递一个特定的Cgroups来运行一个容器 | | [详见cgroup-parent](#cgroup-parent) |
| `--cidfile` | `string` |  | 将container_id写入指定的文件中 | | [详见bb](bb) |
| `--cpu-period` | `int` |  | 限制CPU CFS [^2]的使用周期通常和`--cpu-quota`组合使用 | Cgroups`cpu` | [详见cpu-period-quote](#cpu-period-quote) |
| `--cpu-quota` | `int` | | 限制CPU CFS 的使用值通常和`--cpu-period`组合使用 | Cgroups`cpu` | [详见cpu-period-quota](#cpu-period-quote) |
| `--cpu-rt-period` | `int` | | 以微秒为单位限制CPU实时周期 | Cgroups`cpu` | [详见cpu-rt-period](#cpu-rt-period) |
| `--cpu-rt-runtime` | `int` |  | 以微秒为单位限制CPU实时运行时间 | Cgroups`cpu` | [详见cpu-rt-runtime](#cpu-rt-runtime) |
| `--cpu-shares` `-c` |  `int` | | CPU份额(相对重量) | Cgroups`cpu` | [详见bb](bb) |
| `--cpus` | `decimal` | | CPU数量 | Cgroups`cpu` | [详见bb](bb) |
| `--cpuset-cpus` | `string` | | 限制容器使用的cpu核 | Cgroups`cpuset` | [详见cpuset-cpus](#cpuset-cpus) |
| `--cpuset-mems` | `string` | | 限制容器使用的内存节点| Cgroups`cpuset` | [详见cpuset-mems](#cpuset-mems) |
| `--detach` `-d` | | `false` | 在后台运行容器并输出容器id | | [详见bb](bb) |
| `--detach-keys` | `string` |  | 覆盖分离容器的键序列 | | [详见bb](bb) |
| `--device` | `list` | | 将主机设备添加到容器 | Cgroups`devices` | [详见bb](bb) |
| `--devive-cgroup-rule` | `list` | | | | [详见bb](bb) |
| `--device-read-bps` | `list` | | | Cgroups`blkio`  | [详见device-read-bps](#device-read-bps) |
| `--device-read-iops` | `list` | | | Cgroups`blkio` | [详见device-read-iops](#device-read-iops) |
| `--device-write-bps` | `list` | | | Cgroups`blkio` | [详见device-weite-bps](#device-write-bps) |
| `--device-write-iops` | `list` | | | Cgroups`blkio` | [详见device-write-iops](#device-write-iops) |
| `--disable-content-trust` | | | | | [详见bb](bb) |
| `--dns` | `list` | | 添加 DNS 服务器到容器的 `/etc/resolv.conf` 中| `network` | [详见dns](#dns) |
| `--dns-option` | `list` | |  | `network` | [详见bb](bb) |
| `--dns-search` | `list` | |设定容器的搜索域[^3] | `network` | [详见bb](bb) |
| `--entrypoint` | `string` | | | | [详见bb](bb) |
| `--env` `-e` | `list` | | | | [详见bb](bb) |
| `--env-file` | `list` | | | | [详见bb](bb) |
| `--expose` | `list` | | | | [详见bb](bb) |
| `--group-add` | `list` | | | | [详见bb](bb) |
| `--health-cmd` | `string` | | | | [详见bb](bb) |
| `--health-interval` | `duration` |  | | | [详见bb](bb) |
| `--health-retries` | `int` | | | | [详见bb](bb) |
| `--health-start-period` | `duration` | |  | | [详见bb](bb) |
| `--hostname` `-h` | `string` | | 容器主机名 | | [详见bb](bb) |
| `--init` | | | | | [详见bb](bb) |
| `--interactive` `-i` | |  | | | [详见bb](bb) |
| `--ip` | `string` | | | | [详见bb](bb) |
| `--ip6` | `string` | | | | [详见bb](bb) |
| `--ipc` | `string` | | | `namespace` | [详见bb](bb) |
| `--isoltion` | `string` | ||  | [详见bb](bb) |
| `--kernel-memory` | `bytes` | | 内核内存限制 | Cgroups`memory` | [详见kernel-memory](bb) |
| `--label` `-l` | `list` | | | | [详见bb](bb) |
| `--label-file` | `list` | | | | [详见bb](bb) |
| `--link` | `list` | | | 连接不同的容器 | [详见link](#link) |
| `--link-local-ip` | `list` | | | | [详见bb](bb) |
| `--log-driver` | `string` | | | | [详见bb](bb) |
| `--log-opt` | `list` | | | | [详见bb](bb) |
| `--mac-address` | `list` | | | | [详见bb](bb) |
| `--memory` `-m` | `bytes` | | | Cgroups`memory` | [详见memory](#memory) |
| `--memory-reservation` | `bytes` | | | Cgroups`memory` | [详见memory-reservation](#memory-reservation) |
| `--memory-swap` | `bytes` | | | Cgroups`memory` | [详见memory-swap](#memory-swap) |
| `--memory-swappiness` | `int` | | | Cgroups`memory` | [详见memory-swappiness](#memory-swappiness) |
| `--mount` | `mount` | | 添加绑定挂载或卷[^4] | | [详见mount](#mount) |
| `--name` | `string` | | | | [详见bb](bb) |
| `--network` | `list` | | | | [详见bb](bb) |
| `--network-alias` | `list` | | | | [详见bb](bb) |
| `--no-healthcheck` | | | | |  [详见bb](bb) |
| `--oom-kill-diasble` | | | | Cgroups`memory` | [详见bb](bb) |
| `--oom-score-adj` | `int` | | | | [详见bb](bb) |
| `--pid` | `string` | | | `namespace` | [详见bb](bb) |
| `--pids-limit` | `int` | | | | [详见bb](bb) |
| `--privileged` | | | | | [详见bb](bb) |
| `--publish` `-p` | `list`| |  | | [详见bb](bb) |
| `--publish-all` `-P` | | || | [详见bb](bb) |
| `--read-only` | | | | |[详见bb](bb) |
| `--restart` | `string` || | | [详见bb](bb) |
| `--rm` | | | | [详见bb](bb) |
| `--runtime` | `string` | || | [详见bb](bb) |
| `--securty-opt` | `list` | || | [详见bb](bb) |
| `--shm-size` | `bytes` | | || [详见bb](bb) |
| `--sig-proxy` | | | | | [详见bb](bb) |
| `--stop-signal` | `string` || | | [详见bb](bb) |
| `--stop-timeout` | `int` | | || [详见bb](bb) |
| `--storage-opt` | `list` | | || [详见bb](bb) |
| `--sysctl` | `map` | | || [详见bb](bb) |
| `--tty` `-t` | | | | |[详见bb](bb) |
| `--ulimit` | `ulimit` || | | [详见bb](bb) |
| `--user` `-u` | `string` || | | [详见bb](bb) |
| `--userns` | `string` | | | `namespace` | [详见bb](bb) |
| `--uts` | `string` | | | `namespace` | [详见bb](bb) |
| `--volume` `-v` | `list` | | 工作目录挂载到容器中 | | [详见volume](#volume) |
| `--volume-driver` | `string` | | | | [详见bb](bb) |
| `--volumes-from` | `list` | | | | [详见bb](bb) |
| `--workdir` `-w`| `string` | | | | [详见bb](bb) |
| `--help`||| 查看`docker container run`的帮助信息 ||||

## 示例(examples)

### add-host {#add-host}

```add-host
docker container run --add-host
```

### attach {#attach}

```attach
docker container run --attach
```

### blkio-weight {#blkio-weight}

```blkio-weight
docker container run --blkio-weight
```

### blkio-weight-device

```blkio-weight-device
docker container run --blkio-weight-device
```

### cap-add {#cap-add}

```cap-add
docker container run --cap-add
```

### cap-drop {#cap-drop}

```cap-drop
docker container run --cap-drop
```

### Cgroups-parent (control group控制组) {#Cgroups-parent}

```Cgroups-parent
docker container run --Cgroups-parent
```

### cidfile {#cidfile}

```cidfile
docker container run --cidfile
```

### cpu-period (cpu周期) && cpu-quota (cpu 使用) {#cpu-period-quota}

`--cpu-period` 和 `--cpu-quota` 的单位为微秒(μs)。`cpu-period`的最小值1000微秒,最大值1000000微妙(即1秒)

```cpu-period-quota
docker container run --cpu-period --cpu-quota
```

### cpu-rt-period {#cpu-rt-period}

```cpu-rt-period
docker container run --cpu-rt-period
```

### cpu-rt-runtime {#cpu-rt-runtime}

```cpu-rt-runtime
docker container run --cpu-rt-runtime
```

### cpu-shares {#cap-add}

```cap-add
docker container run --cap-add
```

### cpus {#cap-add}

```cap-add
docker container run --cap-add
```

### cpuset-cpus {#cap-add}

```cap-add
docker container run --cap-add
```

### cpuset-mems {#cap-add}

```cap-add
docker container run --cap-add
```

### detach (分离){#cap-add}

```detach
docker container run --detach
```

### detach-keys {#cap-add}

```cap-add
docker container run --cap-add
```

### device {#cap-add}

```cap-add
docker container run --cap-add
```

### device-Cgroups-rule {#cap-add}

```cap-add
docker container run --cap-add
```

### device-read-bps {#cap-add}

```device-read-bps
docker container run --cap-add
```

### device-read-iops {#cap-add}

```cap-add
docker container run --cap-add
```

### device-write-bps {#cap-add}

```cap-add
docker container run --cap-add
```

### device-write-iops {#cap-add}

```cap-add
docker container run --cap-add
```

### disable-content-trust {#cap-add}

```cap-add
docker container run --cap-add
```

### dns {#cap-add}

```cap-add
docker container run --cap-add
```

### dns-option {#cap-add}

```cap-add
docker container run --cap-add
```

### dns-search {#cap-add}

```cap-add
docker container run --cap-add
```

### entrypoint {#cap-add}

```cap-add
docker container run --cap-add
```

### env {#cap-add}

```cap-add
docker container run --cap-add
```

### env-file {#cap-add}

```cap-add
docker container run --cap-add
```

### expose {#cap-add}

```cap-add
docker container run --cap-add
```

### group-add {#cap-add}

```cap-add
docker container run --cap-add
```

### health-cmd {#cap-add}

```cap-add
docker container run --cap-add
```

### health-interval {#cap-add}

```cap-add
docker container run --cap-add
```

### health-retries {#cap-add}

```cap-add
docker container run --cap-add
```

### health-start-period {#cap-add}

```cap-add
docker container run --cap-add
```

### health-timeout {#cap-add}

```cap-add
docker container run --cap-add
```

### help {#cap-add}

```cap-add
docker container run --cap-add
```

### hostname {#cap-add}

```cap-add
docker container run --cap-add
```

### init {#cap-add}

```cap-add
docker container run --cap-add
```

### interactive {#cap-add}

```cap-add
docker container run --cap-add
```

### ip {#cap-add}

```cap-add
docker container run --cap-add
```

### ip6 {#cap-add}

```cap-add
docker container run --cap-add
```

### ipc {#cap-add}

```cap-add
docker container run --cap-add
```

### isolation {#cap-add}

```cap-add
docker container run --cap-add
```

### kernel-memory {#cap-add}

```cap-add
docker container run --cap-add
```

### label {#cap-add}

```cap-add
docker container run --cap-add
```

### label-file {#cap-add}

```cap-add
docker container run --cap-add
```

### link {#cap-add}

```cap-add
docker container run --cap-add
```

### link-local-ip {#cap-add}

```cap-add
docker container run --cap-add
```

### log-driver {#cap-add}

```cap-add
docker container run --cap-add
```

### log-opt {#cap-add}

```cap-add
docker container run --cap-add
```

### mac-address {#cap-add}

```cap-add
docker container run --cap-add
```

### memory {#cap-add}

```cap-add
docker container run --cap-add
```

### memory-reservation {#cap-add}

```cap-add
docker container run --cap-add
```

### memory-swap {#cap-add}

```cap-add
docker container run --cap-add
```

### memory-swappiness {#cap-add}

```cap-add
docker container run --cap-add
```

### mount {#cap-add}

```cap-add
docker container run --cap-add
```

### name {#cap-add}

```cap-add
docker container run --cap-add
```

### network {#cap-add}

```cap-add
docker container run --cap-add
```

### network-alias {#cap-add}

```cap-add
docker container run --cap-add
```

### no-healthcheck {#cap-add}

```cap-add
docker container run --cap-add
```

### oom-kill-disable {#cap-add}

```cap-add
docker container run --cap-add
```

### oom-score-adj {#cap-add}

```cap-add
docker container run --cap-add
```

### pid {#cap-add}

```cap-add
docker container run --cap-add
```

### pids-limit {#cap-add}

```cap-add
docker container run --cap-add
```

### privileged {#cap-add}

```cap-add
docker container run --cap-add
```

### publish {#cap-add}

```cap-add
docker container run --cap-add
```

### publish-all {#cap-add}

```cap-add
docker container run --cap-add
```

### read-only {#cap-add}

```cap-add
docker container run --cap-add
```

### restart {#cap-add}

```cap-add
docker container run --cap-add
```

### rm {#cap-add}

```cap-add
docker container run --cap-add
```

### runtime {#cap-add}

```cap-add
docker container run --cap-add
```

### security-opt {#cap-add}

```cap-add
docker container run --cap-add
```

### shm-size {#cap-add}

```cap-add
docker container run --cap-add
```

### sig-proxy {#cap-add}

```cap-add
docker container run --cap-add
```

### stop-signal {#cap-add}

```cap-add
docker container run --cap-add
```

### stop-timeout {#cap-add}

```cap-add
docker container run --cap-add
```

### storage-opt {#cap-add}

```cap-add
docker container run --cap-add
```

### sysctl {#cap-add}

```cap-add
docker container run --cap-add
```

### tmpfs {#cap-add}

```cap-add
docker container run --cap-add
```

### tty {#cap-add}

```cap-add
docker container run --cap-add
```

### ulimit {#cap-add}

```cap-add
docker container run --cap-add
```

### user {#cap-add}

```cap-add
docker container run --cap-add
```

### userns {#cap-add}

```cap-add
docker container run --cap-add
```

### uts {#cap-add}

```cap-add
docker container run --cap-add
```

### volume {#cap-add}

```cap-add
docker container run --cap-add
```

### volume-driver {#cap-add}

```cap-add
docker container run --cap-add
```

### volumes-from {#cap-add}

```cap-add
docker container run --cap-add
```

### workdir {#cap-add}

```cap-add
docker container run --cap-add
```

## 官方文档(coffcial documents)

* 精简版
  [国内](https://docs.docker-cn.com/engine/reference/commandline/container_run/) | [国外](https://docs.docker.com/engine/reference/commandline/container_run/)
* 详细版
  [国内](https://docs.docker-cn.com/engine/reference/commandline/run/) | [国外](https://docs.docker.com/engine/reference/commandline/run/)

## 参考资料

* 主要讲Cgroups <http://www.infoq.com/cn/articles/docker-resource-management-Cgroupss>
* `mount` 和 `volume` 的区别 <>

## 标注详解

[^1]: `Cgroups` 是`control groups`缩写有7个子系统组成 `cpuset`、`cpu`、`cpuacct`、`blkio`、`devices`、`freezer`、`memory`[了解更多](http://www.infoq.com/cn/articles/docker-kernel-knowledge-Cgroupss-resource-isolation)这些控制组都在`/sys/fs/Cgroups`目录下面
[^2]: CFS(Completely Fair Scheduler) 完全公平调度器[了解更多](https://www.ibm.com/developerworks/cn/linux/l-completely-fair-scheduler/index.html?%20%20ca=drs-cn-0125)
[^3]: 搜索域[查看官方解答](https://docs.docker.com/v17.09/engine/userguide/networking/default_network/configure-dns/)
[^4]: `mount` 的类型可以是`volume`、`bind`、`tmpfs`[详细了解](https://docs.docker.com/engine/reference/commandline/service_create/#add-bind-mounts-volumes-or-memory-filesystems)
[^5]: 标准流有: 标准输入`stdin`、标准输出`stdout`、标准错误、`stderr`
