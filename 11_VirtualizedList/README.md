## Virtualized List

Since [Virtualized List](https://reactnative.dev/docs/virtualizedlist)s are the base of [Flat](https://reactnative.dev/docs/flatlist) and [Section](https://reactnative.dev/docs/sectionlist) Lists they don't have a lot of use cases. But one of them is displaying a lot of data via their smart loading methods that other Lists don't expose.

### Motivation

[Tulip](https://github.com/OpenAttackDefenseTools/tulip) is a tool that is used in CTFs and displays logs from incoming requests. Since a lot of traffic is generated in a single second during a CTF, the displaying of the logs needs to be performant. That's why a Virtualized List is the perfect List to use in this knockoff mobile demo. 
